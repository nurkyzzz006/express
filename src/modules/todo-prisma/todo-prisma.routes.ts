import { Router } from "express";
import todoPrismaControllers from "./todo-prisma.controllers";

const router = Router();

router.get("/get-all", todoPrismaControllers.getTodos);
router.get("/get/:id", todoPrismaControllers.getTodoById);
router.post("/craete", todoPrismaControllers.createTodo);
router.delete("/delete/:id", todoPrismaControllers.deleteTodo);
router.patch("/update/:id", todoPrismaControllers.upDateTodo);

export default router;
