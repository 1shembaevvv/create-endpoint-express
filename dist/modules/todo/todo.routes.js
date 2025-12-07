"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_controller_1 = __importDefault(require("./todo.controller"));
const router = (0, express_1.Router)();
router.get("/get-all", todo_controller_1.default.getTodos);
router.post("/create", todo_controller_1.default.createTodo);
router.delete("/delete/:id", todo_controller_1.default.deleteTodo);
router.put("/full-change/:id", todo_controller_1.default.fullChangeTodo);
exports.default = router;
