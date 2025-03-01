import express from "express";
import mongoose from "mongoose";

const app = express(); // configure the server

app.use(express.json()); // middleware (for json)

// connect to mongodb database
try {
    mongoose.connect("mongodb+srv://joshiprabin17:QJZbtY9IIagET6cw@cluster0.i5iob.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("MongoDB Connection Success");
} catch (error) {
    console.log("MangoDB Connection Error", error);
}

// Table Schema -> MealMaster Schema (items for the mealMaster table)
const mealMasterSchema = new mongoose.Schema({
    image: { type: String, required: true },
    category: { type: String, required: true, enum: ["Breakfast", "Lunch", "Dinner"] },
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
});

// Make MealMaster Table (Model)
const MealMaster = mongoose.model("MealMaster", mealMasterSchema);

// CRUD Operations For Food Menu (i.e., MealMaster)
// 1. Create 
app.post("/mealMaster", async (req, res) => {
    try {
        const newMealMaster = await new MealMaster(req.body).save();
        return res.status(201).json({
            message: "MealMaster created successfully",
            data: newMealMaster,
        });
    } catch (error) {
        if (error.code === 11000) { // MongoDB duplicate key error
            return res.status(409).json({
                message: "Name already taken, please choose a different name",
            });
        }
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
});


app.listen(4000, () => {
    console.log("Server is running on port 4000!");
})

app.get("/", (req, res) => {
    res.send("server is working");
})