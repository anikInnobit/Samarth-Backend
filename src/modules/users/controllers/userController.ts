import { Request, Response } from "express";
import {userService} from "../services/user";
import * as constant from '../../../common/constants'
import * as respHndlr from '../../../common/responses/responseHandler'

const userServiceInstance = new userService()
export class UserController{
  

  // async register(req: Request, res: Response) {
  //   userServiceInstance.register(req).then((result: any) => {   
  //     ;
  //   }).catch((err: any) => {
        
  //     });

  // }


  async readOne(req: Request, res: Response) {
    userServiceInstance.getUserById(req).then((result: any) => {   
      return  respHndlr.sendSuccess(res, result, constant.RESPONSE_STATUS.SUCCESS);
    }).catch((err: any) => {
      return respHndlr.sendError(res, err);  
    });
  }


  async readAll(req: Request, res: Response) {
    userServiceInstance.getAllUser2(req).then((result: any) => {   
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

  

//   async checkUserWithSite(req: Request, res: Response) {
//     userServiceInstance.checkUserWithSite(req).then((result: any) => {   
     
//     }).catch((err: any) => {
       
//       });

//   }

//   async deleteSite(req: Request, res: Response) {
//     userServiceInstance.deleteUserWithSite(req).then((result: any) => {   
     
//     }).catch((err: any) => {
       
//       });

//   }

//   async deleteTenant(req: Request, res: Response) {
//     userServiceInstance.deleteUserWithTenant(req).then((result: any) => {   
     
//     }).catch((err: any) => {
        
//       });

//   }

//   async uploadImage(req: Request, res: Response) {
//     userServiceInstance.uploadImagetoS3(req).then((result: any) => {   
     
//     }).catch((err: any) => {
       
//       });

//   }

//   async restoreUserWithTenantId(req: Request, res: Response) {
//     userServiceInstance.restoreUserWithTenant(req).then((result: any) => {   
     
//     }).catch((err: any) => {
      
//       });

//   }
  
//   async restoreUserWithSiteId(req: Request, res: Response) {
//     userServiceInstance.restoreUserWithSite(req).then((result: any) => {   
      
//     }).catch((err: any) => {
        
//       });

//   }




}
