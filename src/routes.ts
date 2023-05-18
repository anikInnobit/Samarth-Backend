import { Router } from "express"
import userRoutes from "./modules/users/routes/userRoutes"

const mainRouter = Router()

// add module's router here in main router


 mainRouter.use(userRoutes)


export default mainRouter
