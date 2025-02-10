import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
    due_date: {
      required: true,
      type: Date,
    },
    priority: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const postModel = mongoose.model("Post", postSchema);
export default postModel;
