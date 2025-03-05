import express from "express";
import { deleteUserById, getAllUsers, getUserById, loginUser, registerUser, updateUserById } from "../controller/userController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", verifyToken, getAllUsers);
router.get("/:id", verifyToken, getUserById);
router.patch("/:id", verifyToken, updateUserById);
router.delete("/:id", verifyToken, deleteUserById);

export default router;