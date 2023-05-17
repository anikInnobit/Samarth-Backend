"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
class MainRouter {
    constructor() {
        this.user = new user_1.UserController();
        this.router = (0, express_1.Router)({ mergeParams: true });
        this.userRouter();
    }
    userRouter() {
        this.router.route(`api/v1/users`)
            .post(this.user.create);
        this.router.route(`api/v1/user/:userId`)
            .patch(this.user.update);
        this.router.route(`api/v1/user/:userId`)
            .delete(this.user.delete);
        this.router.route(`api/v1/user/:userId`)
            .get(this.user.readAll);
    }
}
exports.default = new MainRouter().router;
