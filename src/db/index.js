import mongoose from "mongoose";

const connectToDatabase = async () => {
	try {
		await mongoose.connect(process.env.mongo_uri)
		console.log('✅ Connection to MongoDB successful');
	} catch (error) {
		console.error('❌ Error connecting to MongoDB:', error);
		process.exit(1)
	}
}

export default connectToDatabase;
