import dotenv from "dotenv";
dotenv.config();

import cookieParser from "cookie-parser";
import express from "express";
import mongoose from "mongoose";
import { routes } from "./routes/index.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());

app.use("/api", routes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

try {
  mongoose.connect(process.env.MONGO_DB);
  console.log("Connected to MongoDB");
} catch (err) {
  console.error(err);
}
