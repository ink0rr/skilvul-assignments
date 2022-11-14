import { User } from "../models/User.js";
import { HttpError } from "../utils/error.js";

/** @type{import("express").RequestHandler} */
export async function get(req, res, next) {
  try {
    const users = await User.find();
    if (!users) {
      throw new HttpError(404, "Users not found");
    }
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
}

/** @type{import("express").RequestHandler} */
export async function getByUsername(req, res, next) {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username });
    if (!user) {
      throw new HttpError(404, "User not found");
    }
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
}
