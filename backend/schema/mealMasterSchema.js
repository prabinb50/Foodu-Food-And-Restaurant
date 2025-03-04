import mongoose from "mongoose";

// Table Schema -> MealMaster Schema (items for the mealMaster table)
const mealMasterSchema = new mongoose.Schema({
    image: { type: String, required: true },
    category: { type: String, required: true, enum: ["Breakfast", "Lunch", "Dinner"] },
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
});

// Make MealMaster Table (Model)
export const MealMaster = mongoose.model("MealMaster", mealMasterSchema);