import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			trim: true,
			required: "Name is required",
		},
		phone: {
			type: String,
			trim: true,
			required: "Phone is required",
		},
		address: {
			type: String,
			trim: true,
		},
		email: {
			type: String,
			trim: true,
		},
		details: {
			type: String,
			trim: true,
		},
		photo: {
			type: String,
			trim: true,
		},
		seller: {
			type: mongoose.Schema.ObjectId,
			ref: "User",
		},
	},
	{ timestamps: true }
);

export default mongoose.model("Client", ClientSchema);
