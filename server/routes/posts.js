import express from "express";
import { getPosts, createPost } from "../controllers/posts.js";

const router = express.Router();

// using logic impoorted from colntroller folder
router.get("/", getPosts);
router.get("/", createPost);

export default router;
