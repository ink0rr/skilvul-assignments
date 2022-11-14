import { Router } from "express";
import * as AuthController from "../controllers/Auth.js";

export const authRouter = Router();

authRouter.post("/login", AuthController.login);

authRouter.post("/register", AuthController.register);

authRouter.get("/logout", AuthController.logout);
