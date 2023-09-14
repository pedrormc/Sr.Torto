import express from "express";
import { addUser, deleteUser, getUsers, updateUser } from "../controllers/user.js";
import { addTask, deleteTask, getTasks, updateTask } from "../controllers/task.js";

const router = express.Router()

router.get("/", getUsers)

router.post("/", addUser)

router.put("/:id", updateUser)

router.delete("/:id", deleteUser)



 router.get("/task", getTasks)

 router.post("/task", addTask)

 router.put("/:id", updateTask)

 router.delete("/:id", deleteTask)



export default router