// Middlewares
import connectDB from "../../../middlewares/connectDB";

// Models
import Message from "../../../models/message";

const handler = async (req, res) => {
	if (req.method === "GET") {
		try {
			const { msgId } = req.query;

			const message = await Message.findOne({ shortId: msgId });

			if (!msgId || !message) return res.status(404).json({ message: "Message not found!" });

			return res.status(200).json({ message });
		} catch (error) {
			return res.status(400).json({ message: error.message });
		}
	}
	return res.json({ message: "Method not allowed" });
};

export default connectDB(handler);
