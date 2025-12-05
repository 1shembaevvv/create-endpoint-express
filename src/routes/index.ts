import { Router } from "express";
import TodoRoutes from "../modules/todo/todo.routes";
import userRoutes from "../modules/user/user.routes";

const router = Router();
router.use("/todo", TodoRoutes);
router.use("/user", userRoutes);

export default router;
