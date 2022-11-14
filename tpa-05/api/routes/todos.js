import { Router } from "express";
import * as TodoController from "../controllers/Todo.js";

export const todosRoute = Router();

todosRoute.get("/", TodoController.get);

todosRoute.get("/:todoId", TodoController.getById);

todosRoute.post("/", TodoController.create);

todosRoute.patch("/:todoId", TodoController.update);

todosRoute.delete("/:todoId", TodoController.remove);
