import express from "express";
import { userController } from "@/controllers/*";

const router = express.Router();

router.post("/", userController.createUser);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.get("/", userController.getAllUsers);

export default router;
