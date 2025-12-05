import { Request, Response } from "express";

interface TodoType {
	name: string;
	descrion: string;
}

const getTodos = async (req: Request, res: Response) => {
	try {
		const data: TodoType[] = [
			{ name: "Task 1", descrion: "Description 1" },
			{ name: "Task 2", descrion: "Description 2" },
			{ name: "Task 3", descrion: "Description 3" },
		];

		res.status(200).send({
			success: true,
			data: data,
		});
	} catch (e) {
		console.error(e);
	}
};

export default { getTodos };
