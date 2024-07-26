import { type Request, type Response, type NextFunction } from "express";

/**
 * Custom middleware to determine if the request is from HX or not
 */
export const checkHxRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.locals.useLayout = req.headers["hx-request"] !== "true";
  next();
};
