import logger from "@/config/logger";

import { type Request, type Response, type NextFunction } from "express";

/**
 * Error handler middleware for handling errors in the application.
 */
export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  _: NextFunction
) => {
  let statusCode = err.status || 500;

  // Log the error details
  logger.error("Error occurred: %o", {
    message: err.message,
    stack: err.stack,
    route: req.originalUrl,
    method: req.method,
  });

  res.status(statusCode).json({
    success: false,
    message: err.message,
  });
};
