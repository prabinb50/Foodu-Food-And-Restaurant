import express from "express";
import mongoose from "mongoose";
import multer from "multer";
const upload = multer({ dest: "uploads/" });
import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";

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

// CRUD Operations For Food Menu (i.e., MealMaster - Breakfast, Launch, and Dinner)
// 1. Create 
app.post("/mealMaster", upload.single("image"), async (req, res) => {
    try {
        const mealMasterExist = await MealMaster.findOne({ name: req.body.name });
        if (mealMasterExist) {
            return res.status(409).json({
                message: "Name already taken, please choose a different name"
            });
        }

        // Handle the image upload before saving to database
        const cloudinaryResponse = await cloudinary.uploader.upload(req.file.path);

        const newMealMaster = await new MealMaster({
            ...req.body,
            image: cloudinaryResponse.secure_url
        }).save();
        return res.status(201).json({
            message: "MealMaster created successfully",
            data: newMealMaster,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error"
        });
    }
});

// 2. Read
app.get("/mealMaster", async (req, res) => {
    try {
        const allMealMasters = await MealMaster.find();
        return res.status(200).json({
            message: "All mealmaster fetched successfully",
            data: allMealMasters,
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        })
    }
})

// 3. Read By Id
app.get("/mealMaster/:id", async (req, res) => {
    try {
        const singleMealMaster = await MealMaster.findById(req.params.id);
        if (!singleMealMaster) {
            return res.status(404).json({
                message: "MealMaster not found",
            });
        }
        return res.status(200).json({
            message: "Single mealmaster fetched successfully",
            data: singleMealMaster,
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error"
        })
    }
})

// 4. Update By Id
app.patch("/mealMaster/:id", async (req, res) => {
    try {
        const updatedMealMaster = await MealMaster.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedMealMaster) {
            return res.status(404).json({
                message: "MealMaster not found"
            });
        }
        return res.status(200).json({
            message: "MealMaster updated successfully",
            data: updatedMealMaster,
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error"
        })
    }
})

// 5. Delete By Id
app.delete("/mealMaster/:id", async (req, res) => {
    try {
        const deletedMealMaster = await MealMaster.findByIdAndDelete(req.params.id);
        if (!deletedMealMaster) {
            return res.status(404).json({
                message: "MealMaster not found"
            });
        }
        return res.status(200).json({
            message: "MealMaster deleted successfully",
            data: deletedMealMaster,
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error"
        })
    }
})


app.listen(4000, () => {
    console.log("Server is running on port 4000!");
})

app.get("/", (req, res) => {
    res.send("server is working");
})