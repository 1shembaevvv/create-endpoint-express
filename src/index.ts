import { buildServer } from "./app";

const server = buildServer();

const start = async () => {
	const PORT = 5000;

	try {
		server.listen(
			{
				port: PORT,
				host: "0.0.0.0",
			},
			() => {
				console.log(`${new Date()}`);
				console.log(`server running on http://localhost:${PORT}`);
			}
		);
	} catch (e) {
		console.error(e);
	}
};

start();
