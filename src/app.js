import  express from "express";
import productRouter from"./productRouter";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app =express();

app.use(express.json());
app.use("/api",productRouter);
mongoose.connect("mongodb://localhost:27017/products");
export const viteNodeApp =app;