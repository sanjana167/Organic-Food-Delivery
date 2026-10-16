import express from 'express'
import { deleteUser, findUserByIdByBody, findUserByIdByParams, findUsers, login, signUp, userUpdate } from '../controller/userController.js';

const userRouter = express.Router()

userRouter.post("/signup", signUp)
userRouter.post("/login", login)
userRouter.get("/findUsers",findUsers)
userRouter.post("/findUserByIdByBody",findUserByIdByBody)
userRouter.get("/findUserByIdByParams/:id",findUserByIdByParams)
userRouter.delete("/deleteUser/:id",deleteUser)
userRouter.put("/userUpdate",userUpdate)
export default userRouter