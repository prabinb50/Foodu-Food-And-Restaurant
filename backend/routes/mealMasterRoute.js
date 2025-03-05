import multer from "multer";
const upload = multer({ dest: "uploads/" });
import express from "express";
import { createMealMaster, deleteMealMasterById, getAllMealMasters, getMealMasterById, updateMealMasterById } from "../controller/mealMasterController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, upload.single("image"), createMealMaster);
router.get("/", getAllMealMasters);
router.get("/:id", getMealMasterById);
router.patch("/:id", verifyToken, upload.single("image"), updateMealMasterById);
router.delete("/:id", verifyToken, deleteMealMasterById);

export default router;