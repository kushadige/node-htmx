import logger from "@/config/logger";

import { type Request, type Response, type NextFunction } from "express";

/**
 * Log the incoming request
 */
export const requestLogger = (
  req: Request,
  _: Response,
  next: NextFunction
) => {
  logger.info(`Received request: ${req.method} ${req.url}`);
  next();
};
