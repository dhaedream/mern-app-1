// gives access to posts
import PostMessage from "../models/postMessage.js";

export const getPosts = (req, res) => {
  res.send("This is working!");
};

export const createPost = (req, res) => {
  res.send("Post Created");
};
