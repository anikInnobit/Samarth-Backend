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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const user_1 = __importDefault(require("../models/user"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class userService {
    //this is to get all the user
    getUser(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("666666666666666");
                let user = yield user_1.default.findAll();
                return Promise.resolve(user);
            }
            catch (err) {
                return Promise.reject(err);
            }
        });
    }
    // this is to get user by Id
    getUserById(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let userExist = yield user_1.default.findByPk(req.params.id);
                if (!userExist) {
                    throw (`user with id ${req.params.id} does not exist`);
                }
                return Promise.resolve(userExist);
            }
            catch (err) {
                return Promise.reject(err);
            }
        });
    }
    //this is to create user
    createUser(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const username = req.body.username;
                let existingUser = yield user_1.default.findAll();
                // if(existingUser){
                //     throw (`user with username ${username} already exists`)
                // }
                //creating user 
                const user = yield user_1.default.create(req.body);
                console.log(user);
                return Promise.resolve(user);
            }
            catch (err) {
                return Promise.reject(err);
            }
        });
    }
    // this is to update user by Id
    updateUser(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // check if user exist or not
                let userExist = yield user_1.default.findByPk(req.params.id);
                if (!userExist) {
                    throw (`user with id ${req.params.id} does not exist`);
                }
                let user = yield user_1.default.update(req.body, {
                    where: { id: req.params.id },
                    returning: true
                });
                return Promise.resolve(user);
            }
            catch (err) {
                return Promise.reject(err);
            }
        });
    }
    //this is to delete user by Id 
    deleteUser(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let existingUser = yield user_1.default.findByPk(req.params.id);
                // throw error if user is not exist
                if ((!existingUser)) {
                    throw ('user to be deleted is not found');
                }
                // delete user 
                yield user_1.default.destroy({ where: { id: req.params.id } });
                return Promise.resolve('user deleted successfully');
            }
            catch (err) {
                return Promise.reject(err);
            }
        });
    }
    register(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("controller hit-----", req);
                let { firstName, lastName, contactNumber, otp } = req.body;
                if (!(contactNumber && otp && firstName && lastName)) {
                    console.log("All input is required");
                }
                let existingUser = yield user_1.default.findOne({ where: { contactNumber: contactNumber } });
                if (existingUser) {
                    throw (`user with username ${contactNumber} already exists`);
                }
                const encryptedPassword = yield bcryptjs_1.default.hash(otp, 10);
                //creating user 
                const user = yield user_1.default.create({ firstName, lastName, contactNumber, otp: encryptedPassword });
                console.log("user------", user);
                // const token = jwt.sign(
                //     { user_id: user.id,contactNumber },
                //     process.env.TOKEN_KEY,
                //     {
                //       expiresIn: "2h",
                //     }
                //   );
                //   user.token = token;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
}
exports.userService = userService;
