// import { Router } from "express";
// import { UserController } from "../controllers/userController";


// class MainRouter {

//     router: Router;
//     user: UserController
//     constructor() {
//         this.user = new UserController()
//         this.router = Router({ mergeParams: true })
//         this.userRouter()
//     }

//     userRouter() {
//         this.router.route(`api/v1/users`)
//             .post(this.user.create)
//         this.router.route(`api/v1/user/:userId`)
//             .patch(this.user.update)
//         this.router.route(`api/v1/user/:userId`)
//             .delete(this.user.delete)
//         this.router.route(`api/v1/user/:userId`)
//             .get(this.user.readAll)

//     }

// }
// export default new MainRouter().router
