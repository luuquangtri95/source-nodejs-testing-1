import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import HomeRoute from "./routes/home.js";
import UploadRoute from "./routes/upload.js";

const app = express();
const PORT = process.env.PORT;

// static file
app.use(express.static("public"));

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", HomeRoute);
app.use("/", UploadRoute);

app.listen(PORT, () => {
  console.log("server running", PORT);
});
