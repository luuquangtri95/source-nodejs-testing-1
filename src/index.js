import dotenv from "dotenv";
dotenv.config();
import HomeRoute from "./routes/home.js";
import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT;

// static file
app.use(express.static("public"));

// middleware

app.use(bodyParser.json());

app.use("/", HomeRoute);

app.listen(PORT, () => {
  console.log("server running", PORT);
});
