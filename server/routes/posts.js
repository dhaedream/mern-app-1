import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("This is Working");
});

export default router;
