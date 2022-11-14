import { Todo } from "../models/Todo.js";
import { HttpError } from "../utils/error.js";

/** @type{import("express").RequestHandler} */
export async function get(req, res, next) {
  try {
    const { userId } = res.locals.data;
    const todos = await Todo.find().where("userId").equals(userId);
    res.status(200).json(todos);
  } catch (err) {
    next(err);
  }
}

/** @type{import("express").RequestHandler} */
export async function getById(req, res, next) {
  try {
    const { userId } = res.locals.data;
    const { todoId } = req.params;
    const todo = await Todo.findById(todoId);
    if (!todo) {
      throw new HttpError(404, "Todo not found");
    }
    if (todo.userId !== userId) {
      throw new HttpError(401, "Unauthorized");
    }
    res.status(200).json(todo);
  } catch (err) {
    next(err);
  }
}

/** @type{import("express").RequestHandler} */
export async function create(req, res, next) {
  try {
    const { userId } = res.locals.data;
    const { title } = req.body;
    const todo = await Todo.create({
      title,
      checked: false,
      userId,
    });
    res.status(201).json(todo);
  } catch (err) {
    next(err);
  }
}

/** @type{import("express").RequestHandler} */
export async function update(req, res, next) {
  try {
    const { title, checked } = req.body;
    const todo = await Todo.findByIdAndUpdate(req.params.id, { title, checked });
    res.status(200).json(todo);
  } catch (err) {
    next(err);
  }
}

/** @type{import("express").RequestHandler} */
export async function remove(req, res, next) {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(200);
  } catch (err) {
    next(err);
  }
}
