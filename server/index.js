import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import route from "./routes/index.mjs";
import("./utils/db.mjs");

app.use("/", route);
app.use(morgan("dev"));

app.listen(8800, () => {
  console.log("running on port 8800");
});
