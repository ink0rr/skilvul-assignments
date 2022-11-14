import { Router } from "express";
import * as UserController from "../controllers/User.js";

export const usersRoute = Router();

usersRoute.get("/", UserController.get);

usersRoute.get("/:username", UserController.getByUsername);
