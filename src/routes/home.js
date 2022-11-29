import express from "express";
import Controller from "../controllers/home.controller.js";
const route = express.Router();

route.get(["/", "/home"], Controller.get);

export default route;
