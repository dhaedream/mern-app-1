import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";

//initialize express server
const app = express();

//every route for post will come from http://localhost:5050/posts
app.use("/posts", postRoutes);

//limit size of images
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Mongodb cluod atlas
const CONNECTION_URL =
  "mongodb+srv://dhaedream:dhaedream@cluster0.cveob.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5005;

// const mongoose = require("mongoose");

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

// mongoose.set("useFindAndModifygit z", false);
