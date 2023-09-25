import express from "express";
import { addUser, deleteUser, getUsers, updateUser } from "../controllers/user.js";
import { addTask, deleteTask, getTasks, updateTask } from "../controllers/task.js";
import { login, register } from "../controllers/auth.js";
const router = express.Router()

router.get("/user", getUsers)

router.post("/user", addUser)

router.put("/user/:id", updateUser)

router.delete("/user/:id", deleteUser)



 router.get("/task", getTasks)

 router.post("/task", addTask)

 router.put("/task/:id", updateTask)

 router.delete("/task/:id", deleteTask)


 router.post("/login", login) 
 router.post("/register/", register)






export default router