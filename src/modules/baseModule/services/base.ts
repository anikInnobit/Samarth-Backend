import { Request } from "express";
import * as constant from '../../../common/constants'
import Exception from "../../../common/exceptions/exception";
import databaseInstance from "../../../config/db";
import { paginator } from "../../../utils/pagination";

export default class BaseService{

    model:any;
    models:any;
    logger:any;
    constructor(model: any){
        this.model = model;
    }
    // constructor({model, models, logger}: any){
    //     this.model = model;
    //     this.models = models;
    //     this.logger = logger;
    // }

    public  async readAll(req:Request){
        try {
            let {sortOrder, sortBy, limit , page, ...filterparams} = req.query;

            let order = sortOrder || "DESC";
            let query = paginator(req.query, []);

            console.log("Enter base Service");
          
            let whereCond = {};
            whereCond = Object.keys(filterparams).length ? filterparams : {};

            

            let respData = await this.model.findAndCountAll({
                limit: query.limit,
                offset: query.offset,
                order: [[req.query.sortBy || "createdAt", order || "DESC"]],
                where: {...whereCond}
            });

            console.log("Exit base Service: ", respData);

            return Promise.resolve(respData); 

        } catch (error) {
            console.log("base Service error: ", error);

            return Promise.reject(error)
        }
    }

    public async readOne(req:Request){
        try {
            var id= req.params.id
           // var result =  await this.model.findOne(id)
             var result =  await this.model.findByPk(id)
            if(!result){
                throw new Exception(constant.ERROR_TYPE.BAD_REQUEST, `record with id ${id} does not exist`)
            }
            return Promise.resolve(result)

        } catch (error) {
            return Promise.reject(error)
        }
    }

    public async create(req:Request){
        const _transaction = await databaseInstance.transaction()
        try {
            let data = await this.model.create(req.body,{ transaction: _transaction })

            await _transaction.commit()
            console.log("Success base Service ===> ")
            return Promise.resolve(data)
        } catch (error) {
            await _transaction.rollback()
            return Promise.reject(error)
        }
    }

    public async update(req:Request){
        const _transaction = await databaseInstance.transaction()
        try {
            var id= req.params.id
            console.log("inside base service update: ",id);
             var result =  await this.model.findByPk(id,{ transaction: _transaction })
            // var result =  await this.model.findOne(id,{ transaction: _transaction })
            if(!result){
                throw new Exception(constant.ERROR_TYPE.BAD_REQUEST, `record with id ${id} does not exist`)
            }
            let data = await this.model.update(req.body,{
                where:{ id:id },returning: true, plain: true,
                transaction: _transaction
            })

            await _transaction.commit()
            return Promise.resolve(data)

        } catch (error) {
            await _transaction.rollback()
            return Promise.reject(error)
        }
    }

    public async delete(req:Request){
        const _transaction = await databaseInstance.transaction()
        try {
            var id= req.params.id
            var result =  await this.model.findByPk(id,{ transaction: _transaction })
            if(!result){
                throw new Exception(constant.ERROR_TYPE.BAD_REQUEST, `record does not exist`)
            }
            await this.model.destroy({where:{id},_transaction})

            await _transaction.commit()
            return Promise.resolve(`record deleted successfully of id ${id}`)
        } catch (error) {
            await _transaction.rollback()
            return Promise.reject(error)
        }
    }

}