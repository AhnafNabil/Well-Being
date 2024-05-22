import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    desc: String,
    likes: [],
    comments: {type: [String], default: []},
    image: String,
  },
  {
    timestamps: true,
  }
);

var PostModel = mongoose.model("Posts", postSchema)
export default PostModel
