import express from "express";
import { getPosts } from "../controllers/posts.js";

const router = express.Router();

// using logic impoorted from colntroller folder
router.get("/", getPosts);

export default router;
