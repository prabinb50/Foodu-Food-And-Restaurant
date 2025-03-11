import mongoose from "mongoose";

// Table Schema (News & Blog Schema)
const newsAndBlogSchema = new mongoose.Schema({
    category: { type: String, required: true }, // e.g., "Burger", "Food", "Pizza"
    image: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: Date.now },
    author: { type: String, required: true },
});

// Make News & Blog Table (Model)
export const NewsAndBlog = mongoose.model("NewsAndBlog", newsAndBlogSchema);