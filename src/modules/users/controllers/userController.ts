import { Request, Response } from "express";
import {userService} from "../services/user";
import * as constant from '../../../common/constants'
import * as respHndlr from '../../../common/responses/responseHandler'

const userServiceInstance = new userService()
export class UserController{
  

  async readOne(req: Request, res: Response) {
    userServiceInstance.getUserById(req).then((result: any) => {   
      return  respHndlr.sendSuccess(res, result, constant.RESPONSE_STATUS.SUCCESS);
    }).catch((err: any) => {
      return respHndlr.sendError(res, err);  
    });
  }


  async readAll(req: Request, res: Response) {
    userServiceInstance.getAllUser(req).then((result: any) => {   
      return  respHndlr.sendSuccess(res, result, constant.RESPONSE_STATUS.SUCCESS);
    }).catch((err: any) => {
        return respHndlr.sendError(res, err);  
    });

  }

  async create(req: Request, res: Response) {
    userServiceInstance.createUser(req).then((result: any) => {   
      return  respHndlr.sendSuccess(res, result, constant.RESPONSE_STATUS.SUCCESS);
    }).catch((err: any) => {
      return respHndlr.sendError(res, err);  
    });
  }


  async update(req: Request, res: Response) {
    userServiceInstance.updateUser(req).then((result: any) => {   
      return  respHndlr.sendSuccess(res, result, constant.RESPONSE_STATUS.SUCCESS);
    }).catch((err: any) => {
      return respHndlr.sendError(res, err);  
      });

  }

  async delete(req: Request, res: Response) {
    userServiceInstance.deleteUser(req).then((result: any) => {   
      return  respHndlr.sendSuccess(res, result, constant.RESPONSE_STATUS.SUCCESS);
    }).catch((err: any) => {
      return respHndlr.sendError(res, err);  
    });

  }

  





}
