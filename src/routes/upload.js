import express from "express";
import MulterUpload from "../connector/multer/config.js";
import Controller from "../controllers/upload.controller.js";

const route = express.Router();

route.post("/uploads", MulterUpload.array("file", 10), Controller.upload);

export default route;
