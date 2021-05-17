import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			trim: true,
			required: "Name is required",
		},
		description: {
			type: String,
			trim: true,
		},
		category: {
			type: String,
			required: "Select a Category",
		},
		sketches: [{ type: String, trim: true }],
		beforePhotos: [{ type: String, trim: true }],
		afterPhotos: [{ type: String, trim: true }],
		estimate: {
			type: String,
			trim: true,
		},
		client: {
			type: mongoose.Schema.ObjectId,
			ref: "Client",
		},
	},
	{ timestamps: true }
);

export default mongoose.model("Project", ProjectSchema);
