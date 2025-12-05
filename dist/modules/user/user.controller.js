"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getUser = async (req, res) => {
    try {
        const data = [
            { name: "John", lastname: "Doe", age: 30 },
            { name: "Jane", lastname: "Smith", age: 25 },
            { name: "Alice", lastname: "Johnson", age: 28 },
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
exports.default = { getUser };
