import express from "express";
const route = express.Router();

route.get(["/", "/home"], (req, res) => {
  res.send("home page");
});

export default route;
