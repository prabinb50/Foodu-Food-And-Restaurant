import multer from "multer";
const upload = multer({ dest: "uploads/" });
import express from "express";
import { createShopItem, deleteShopItemById, getAllShopItems, getShopItemById, updateShopItemById } from "../controller/shopItemController.js";

const router = express.Router();

router.post("/", upload.single("image"), createShopItem);
router.get("/", getAllShopItems);
router.get("/:id", getShopItemById);
router.patch("/:id", upload.single("image"), updateShopItemById);
router.delete("/:id", deleteShopItemById);

export default router;