const {addUser,retrieveAllUsers,retrieveById,retrieveBySIC,updateBySIC,deleteBySIC}=require("./../controllers/users.controller.js")

const express=require('express')
const userRouter=express.Router()

userRouter.post("/users",addUser)
userRouter.get("/getAllUsers",retrieveAllUsers)
userRouter.get("/users/:id",retrieveById)
userRouter.get("/getBySIC/:id",retrieveBySIC)
userRouter.put("/update/:id",updateBySIC)
userRouter.delete("/delete/:id",deleteBySIC)

module.exports=userRouter