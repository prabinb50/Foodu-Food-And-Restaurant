import multer from "multer";
const upload = multer({ dest: "uploads/" });
import express from "express";
import { createMealMaster, deleteMealMasterById, getAllMealMasters, getMealMasterById, updateMealMasterById } from "../controller/mealMasterController.js";

const router = express.Router();

router.post("/", upload.single("image"), createMealMaster);
router.get("/", getAllMealMasters);
router.get("/:id", getMealMasterById);
router.patch("/:id", upload.single("image"), updateMealMasterById);
router.delete("/:id", deleteMealMasterById);

export default router;