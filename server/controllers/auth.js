import mongoose from "mongoose";
import User from "../models/User.js";
import bcryptjs from "bcryptjs";
import { createError } from "../middlewares/error.js";

export const signup = async (req, res, next) => {
  try {
    const salt = bcryptjs.genSaltSync(10);
    const hash = bcryptjs.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });

    await newUser.save();
    res.status(201).json({
      status: true,
      message: "success sign up new user",
      data: newUser,
    });
  } catch (err) {
    next(createError(404, "sorry is duplicat data"));
  }
};
