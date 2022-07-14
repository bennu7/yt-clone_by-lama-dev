import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //   useCreateIndex: true,
  })
  .then(() => {
    console.log("connect to db");
  })
  .catch((err) => {
    throw err;
  });
