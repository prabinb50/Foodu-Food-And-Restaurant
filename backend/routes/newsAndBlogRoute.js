import express from "express";
import multer from "multer";
const upload = multer({ dest: "uploads/" });
import { createNewsAndBlog, deleteNewsAndBlogById, getAllNewsAndBlog, getNewsAndBlogById, updateNewsAndBlogById } from "../controller/newsAndBlogController.js";
// import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/", upload.single("image"), createNewsAndBlog);
router.get("/", getAllNewsAndBlog);
router.get("/:id", getNewsAndBlogById);
router.patch("/:id", upload.single("image"), updateNewsAndBlogById);
router.delete("/:id", deleteNewsAndBlogById);

export default router;