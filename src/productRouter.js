import express from "express";
import {create,getAll} from"./product";
const router =express.Router();
router.get("/product", getAll);
router.post("/product",create);

export default router;