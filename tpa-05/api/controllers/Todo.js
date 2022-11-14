import { Todo } from "../models/Todo.js";
import { HttpError } from "../utils/error.js";

/** @type{import("express").RequestHandler} */
export async function get(req, res, next) {
  try {
    const { userId } = res.locals.token;
    const todos = await Todo.find().where("userId").equals(userId);
    res.status(200).json(todos);
  } catch (err) {
    next(err);
  }
}

/** @type{import("express").RequestHandler} */
export async function getById(req, res, next) {
  try {
    const { userId } = res.locals.token;
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
    const { userId } = res.locals.token;
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
    const { userId } = res.locals.token;
    const { title, checked } = req.body;
    const { todoId } = req.params;
    const todo = await Todo.findByIdAndUpdate(todoId, { title, checked }).where("userId").equals(userId);
    if (!todo) {
      throw new HttpError(404, "Todo not found");
    }
    res.status(200).json(todo);
  } catch (err) {
    next(err);
  }
}

/** @type{import("express").RequestHandler} */
export async function remove(req, res, next) {
  try {
    const { userId } = res.locals.token;
    const { todoId } = req.params;
    const todo = await Todo.findByIdAndDelete(todoId).where("userId").equals(userId);
    if (!todo) {
      throw new HttpError(404, "Todo not found");
    }
    res.status(200).json(todo);
  } catch (err) {
    next(err);
  }
}
