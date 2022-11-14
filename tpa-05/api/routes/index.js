import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.js";
import { authRouter } from "./auth.js";
import { todosRoute } from "./todos.js";
import { usersRoute } from "./users.js";

export const routes = Router();

routes.use("/auth", authRouter);
routes.use("/todos", authMiddleware, todosRoute);
routes.use("/users", usersRoute);
