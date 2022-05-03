// Dependencies
import mongoose from "mongoose";

const { Schema } = mongoose;

const messageSchema = new Schema({
	shortId: String,
	shownText: String,
	invisibleText: String,
	author: String,
	receiver: String
});

const Message = mongoose.models.Message || mongoose.model("Message", messageSchema);

export default Message;
