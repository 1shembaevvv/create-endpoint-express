import { Router } from "express";
import userController from "./user.controller";

const router = Router();
router.get("/get-all", userController.getUser);

export default router;
