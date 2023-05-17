"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_1 = require("../services/user");
const userServiceInstance = new user_1.userService();
class UserController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            userServiceInstance.createUser(req).then((result) => {
                ;
            }).catch((err) => {
            });
        });
    }
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("controller hit-----");
            userServiceInstance.register(req).then((result) => {
                ;
            }).catch((err) => {
            });
        });
    }
    readOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            userServiceInstance.getUserById(req).then((result) => {
            }).catch((err) => {
            });
        });
    }
    readAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            userServiceInstance.getUser(req).then((result) => {
            }).catch((err) => {
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            userServiceInstance.updateUser(req).then((result) => {
            }).catch((err) => {
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            userServiceInstance.deleteUser(req).then((result) => {
            }).catch((err) => {
            });
        });
    }
}
exports.UserController = UserController;
