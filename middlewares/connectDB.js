import mongoose from "mongoose";

const DB_URL = process.env.MONGODB_URL;

const connectDB = handler => async (req, res) => {
	if (mongoose.connection.readyState) {
		return handler(req, res);
	}

	await mongoose.connect(DB_URL);

	return handler(req, res);
};

export default connectDB;
