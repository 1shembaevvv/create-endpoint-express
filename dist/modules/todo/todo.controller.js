"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data = [];
const getTodos = async (req, res) => {
    try {
        res.status(200).send({
            success: true,
            data: data,
        });
    }
    catch (e) {
        console.error(e);
    }
};
const createTodo = async (req, res) => {
    try {
        const { name, description } = req.body;
        const newTodo = {
            id: data.length + 1,
            name: name,
            description: description,
        };
        data.push(newTodo);
        res.status(201).send({
            success: true,
            data: newTodo,
        });
    }
    catch (e) {
        console.error(e);
    }
};
const deleteTodo = async (req, res) => {
    const { id } = req.params;
    try {
        const todoIndex = data.findIndex(todo => todo.id === Number(id));
        data.splice(todoIndex, 1);
        res.status(200).send({
            success: true,
            data: todoIndex,
        });
    }
    catch (e) {
        console.error(e);
    }
};
const fullChangeTodo = async (req, res) => {
    const { name, description } = req.body;
    const { id } = req.params;
    try {
        const todoIndex = data.findIndex(todo => todo.id === Number(id));
        // 1 вариант
        const newTodo = {
            id: data[todoIndex].id,
            name: (data[todoIndex].name = name),
            description: (data[todoIndex].description = description),
        };
        // 2 вариант
        // data[todoIndex].name = name;
        // data[todoIndex].description = description;
        // const newTodo = data[todoIndex];
        res.status(200).send({
            success: true,
            data: newTodo,
        });
    }
    catch (e) {
        console.error(e);
    }
};
exports.default = { getTodos, createTodo, deleteTodo, fullChangeTodo };
