import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import route from "./routes/index.mjs";
import("./utils/db.mjs");
app.use(express.json());

app.use("/", route);
app.use(morgan("dev"));
// import middleware from "./middlewares/error.mjs";
// app.use(middleware);

// handling middleware error
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.status || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(8800, () => {
  console.log("running on port 8800");
});
