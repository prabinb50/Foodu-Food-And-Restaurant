import mongoose from "mongoose";

// Table Schema -> ShopItem Schema (items for the shop table)
const shopItemSchema = new mongoose.Schema({
    image: { type: String, required: true },
    category: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
});

// make ShopItem table (model)
export const ShopItem = mongoose.model("ShopItem", shopItemSchema);