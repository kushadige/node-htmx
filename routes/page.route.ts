import express from "express";
import { pageController } from "@/controllers/*";

const router = express.Router();

router.get("/", pageController.getHomePage);
router.get("/profile", pageController.getProfilePage);

export default router;
