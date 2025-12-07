import { Request, Response } from "express";

interface TodoType {
	id: number;
	name: string;
	description: string;
}

const data: TodoType[] = [];

const getTodos = async (req: Request, res: Response) => {
	try {
		res.status(200).send({
			success: true,
			data: data,
		});
	} catch (e) {
		console.error(e);
	}
};

const createTodo = async (req: Request, res: Response) => {
	try {
		const { name, description } = req.body;

		const newTodo: TodoType = {
			id: data.length + 1,
			name: name,
			description: description,
		};

		data.push(newTodo);

		res.status(201).send({
			success: true,
			data: newTodo,
		});
	} catch (e) {
		console.error(e);
	}
};

const deleteTodo = async (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		const todoIndex = data.findIndex(todo => todo.id === Number(id));
		data.splice(todoIndex, 1);

		res.status(200).send({
			success: true,
			data: todoIndex,
		});
	} catch (e) {
		console.error(e);
	}
};

const fullChangeTodo = async (req: Request, res: Response) => {
	const { name, description } = req.body;
	const { id } = req.params;

	try {
		const todoIndex = data.findIndex(todo => todo.id === Number(id));
		const copyTodo = data[todoIndex];

		const newTodo = {
			id: copyTodo.id,
			name: (copyTodo.name = name),
			description: (copyTodo.description = description),
		};

		res.status(200).send({
			success: true,
			data: newTodo,
		});
	} catch (e) {
		console.error(e);
	}
};

const changePatchTodo = async (req: Request, res: Response) => {
	const { name, description } = req.body;
	const { id } = req.params;

	try {
		const todoIndex = data.findIndex(todo => todo.id === Number(id));
		const copyTodo = data[todoIndex];

		const newTodo = {
			...copyTodo,
			name: name ? name : copyTodo.name,
			description: description ? description : copyTodo.description,
		};

		res.status(200).send({
			success: true,
			data: newTodo,
		});
	} catch (e) {
		console.error(e);
	}
};

export default {
	getTodos,
	createTodo,
	deleteTodo,
	fullChangeTodo,
	changePatchTodo,
};
