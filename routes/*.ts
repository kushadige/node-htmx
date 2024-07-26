import express from "express";
import pageRoute from "./page.route";

const router = express.Router();

router.use("/", pageRoute);
router.get("*", (_, res) => {
  res.sendStatus(404);
});

export default router;
