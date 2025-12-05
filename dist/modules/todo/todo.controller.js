"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getTodos = async (req, res) => {
    try {
        const data = [
            { name: "Task 1", descrion: "Description 1" },
            { name: "Task 2", descrion: "Description 2" },
            { name: "Task 3", descrion: "Description 3" },
        ];
        res.status(200).send({
            success: true,
            data: data,
        });
    }
    catch (e) {
        console.error(e);
    }
};
exports.default = { getTodos };
