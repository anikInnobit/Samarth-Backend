import { Router } from "express";
import { UserController } from "../controllers/userController";
import { config } from "../../../config/configIndex";


class UserRoutes {

    router: Router;
    user: UserController
    constructor() {
        this.user = new UserController()
        // this.router = Router({ mergeParams: true })
        this.router = Router();
        this.userRouter()
    }


    userRouter() {

        this.router.route(`${config.API_PREFIX}/users`).get(this.user.readAll)
        this.router.route(`${config.API_PREFIX}/user/:id`).get(this.user.readOne)
        this.router.route(`${config.API_PREFIX}/users`).post(this.user.create)
        this.router.route(`${config.API_PREFIX}/user/:id`).patch(this.user.update)
        this.router.route(`${config.API_PREFIX}/user/:id`).delete(this.user.delete)

    }

}
export default new UserRoutes().router
