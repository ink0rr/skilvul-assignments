import jwt from "jsonwebtoken";
import { User } from "../models/User.js";
import { HttpError } from "../utils/error.js";
import { createHash } from "../utils/hash.js";

/** @type{import("express").RequestHandler} */
export async function register(req, res, next) {
  try {
    const { username, password } = req.body;
    if (username?.length < 3 || password?.length < 3) {
      throw new HttpError(400, "Username and password must be at least 3 characters long");
    }
    const passwordHash = createHash(password);
    const user = await User.create({
      username,
      password: passwordHash,
    });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
}

/** @type{import("express").RequestHandler} */
export async function login(req, res, next) {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      throw new HttpError(404, "Username not found");
    }
    const passwordHash = createHash(password);
    if (user.password !== passwordHash) {
      throw new HttpError(401, "Invalid password");
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.cookie("token", token, { httpOnly: false }).json({ message: "Login success" });
  } catch (err) {
    next(err);
  }
}

/** @type{import("express").RequestHandler} */
export async function logout(req, res) {
  res.clearCookie("token").json({ message: "Logout success" });
}
