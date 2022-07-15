import mongoose from "mongoose";
import User from "../models/User.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res, next) => {
  try {
    const salt = bcryptjs.genSaltSync(10);
    const hash = bcryptjs.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });
    console.log("new user => ", newUser);

    await newUser.save();
    res.status(201).json({
      status: true,
      message: "success sign up new user",
      data: newUser,
    });
  } catch (err) {
    next(err);
  }
};
