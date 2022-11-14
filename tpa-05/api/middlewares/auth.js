import jwt from "jsonwebtoken";
import { User } from "../models/User.js";
import { HttpError } from "../utils/error.js";

/** @type{import("express").RequestHandler} */
export async function authMiddleware(req, res, next) {
  try {
    const token = req.cookies.token;
    const data = jwt.verify(token, process.env.JWT_SECRET);
    if (typeof data === "object" && data.userId) {
      const user = await User.findById(data.userId);
      if (user) {
        res.locals.data = data;
        return next();
      }
    }
    throw new HttpError(401, "Unauthorized");
  } catch (err) {
    res.clearCookie("token");
    next(err);
  }
}
