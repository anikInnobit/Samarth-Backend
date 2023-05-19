import User from '../models/userModel'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import sequelize from "sequelize";

import BaseService from '../../baseModule/services/base';

const baseServiceInstance = new BaseService(User)

export class userService {

    constructor() { }


    async getAllUser(req: any) {
        try {

            let resp = await baseServiceInstance.readAll(req);

            return Promise.resolve(resp);
        }
        catch (error: any) {
            return Promise.reject(error);
        }
    }
    // this is to get user by Id
    async getUserById(req: any) {
        try {
            let userExist = await baseServiceInstance.readOne(req)
            if (!userExist) {
                throw (`user with id ${req.params.id} does not exist`)
            }
            return Promise.resolve(userExist)
        }
        catch (err) { return Promise.reject(err) }
    }

    //this is to create user
    async createUser(req: any) {
        try {
            const { username } = req.body;
            req.query.username = username;
            let existingUser = await baseServiceInstance.readAll(req);
            if (existingUser?.count != 0) {
                throw (`user with username ${username} already exists`)
            }
            const newUser = await baseServiceInstance.create(req);
            return Promise.resolve(newUser);
        }
        catch (err) {
            return Promise.reject(err)
        }
    }

    // this is to update user by Id
    async updateUser(req: any) {
        try {
            // check if user exist or not
            let userExist = await baseServiceInstance.readOne(req);
            if (!userExist) {
                throw (`user with id ${req.params.id} does not exist`)
            }
            let user = await baseServiceInstance.update(req);
            return Promise.resolve(user)
        } catch (err) {
            console.log("err: ", err);
            return Promise.reject(err)
        }

    }

    //this is to delete user by Id 
    async deleteUser(req: any) {
        try {

            let existingUser = await baseServiceInstance.readOne(req);
            // throw error if user is not exist
            if ((!existingUser)) {
                throw ('user to be deleted is not found')
            }
            // delete user 
            await baseServiceInstance.delete(req);

            return Promise.resolve('user deleted successfully')
        } catch (err) { return Promise.reject(err) }
    }


}

