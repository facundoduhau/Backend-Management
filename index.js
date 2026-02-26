import dotenv from "dotenv";
import app from "./app.js";
import connectToDatabase from "./src/db/index.js";

dotenv.config({
	path: "./.env",
});

const port = process.env.PORT || 3000

connectToDatabase()
	.then(() => {
		app.listen(port, () => {
			console.log(`🚀 Server is running on port http://localhost:${port}`);
		});
	})
	.catch((err) => {
		console.error('❌ Error connecting to MongoDB:', err);
		process.exit(1);
	})
