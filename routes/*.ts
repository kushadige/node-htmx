import express from "express";
import pageRoute from "./page.route";
import userRoute from "./user.route";

const router = express.Router();

router.use("/", pageRoute);
router.use("/api/users", userRoute);
router.get("*", (req, _, next) => {
  const err = new Error(`Cannot find ${req.originalUrl}.`);
  next(err);
});

export default router;
