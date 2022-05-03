// Dependencies
import shortid from "shortid";

// Middlewares
import connectDB from "../../middlewares/connectDB";

// Models
import Message from "../../models/message";

const handler = async (req, res) => {
	if (req.method === "POST") {
		try {
			const body = JSON.parse(req.body);

			const shortId = shortid.generate();

			const newProduct = new Message({
				shortId: shortId,
				shownText: body.shownText,
				invisibleText: body.invisibleText,
				author: body.author || "Anonymous",
				receiver: body.receiver || "You"
			});
			await newProduct.save();

			return res.status(200).json({ link: `https://reveal-me.vercel.app/${shortId}` });
		} catch (error) {
			return res.status(400).json({ message: error.message });
		}
	}
	return res.json({ message: "Method not allowed" });
};

export default connectDB(handler);
