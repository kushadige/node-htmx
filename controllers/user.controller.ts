import { UserModel } from "@/models/*";
import { CustomError } from "@/utils/errors";

import { type Request, type Response, type NextFunction } from "express";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;

  if (!data.name) {
    const error = new CustomError("Name is required.", 400);
    return next(error);
  }

  const user = await UserModel.createUser(data);

  return res.status(201).json({
    success: true,
    message: "User created successfully.",
    data: user,
  });
};

const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  const id = parseInt(req.params.id);

  if (!id) {
    const error = new CustomError("User ID is required.", 400);
    return next(error);
  }

  const user = await UserModel.getUserById(id);

  if (!user) {
    const error = new CustomError("User not found.", 404);
    return next(error);
  }

  return res.status(200).json({
    success: true,
    message: "User retrieved successfully.",
    data: user,
  });
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  const id = parseInt(req.params.id);
  const data = req.body;

  if (!id) {
    const error = new CustomError("User ID is required.", 400);
    return next(error);
  }

  if (!data.name) {
    const error = new CustomError("Name is required.", 400);
    return next(error);
  }

  try {
    const user = await UserModel.updateUser(id, data);

    return res.status(200).json({
      success: true,
      message: "User updated successfully.",
      data: user,
    });
  } catch (err) {
    const customError = new CustomError("User not found.", 404);
    return next(customError);
  }
};

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  const id = parseInt(req.params.id);

  if (!id) {
    const error = new CustomError("User ID is required.", 400);
    return next(error);
  }

  try {
    await UserModel.deleteUser(id);

    return res.status(200).json({
      success: true,
      message: "User deleted successfully.",
    });
  } catch (err) {
    const customError = new CustomError("User not found.", 404);
    return next(customError);
  }
};

const getAllUsers = async (_: Request, res: Response) => {
  const users = await UserModel.getAllUsers();

  return res.status(200).json({
    success: true,
    message: "Users retrieved successfully.",
    data: users,
  });
};

export const userController = {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers,
};
