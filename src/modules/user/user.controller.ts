import { Request, Response } from "express";

interface UserType {
	name: string;
	lastname: string;
	age: number;
}

const getUser = async (req: Request, res: Response) => {
	try {
		const data: UserType[] = [
			{ name: "John", lastname: "Doe", age: 30 },
			{ name: "Jane", lastname: "Smith", age: 25 },
			{ name: "Alice", lastname: "Johnson", age: 28 },
		];

		res.status(200).send({
			success: true,
			data: data,
		});
	} catch (e) {
		console.error(e);
	}
};

export default { getUser };
