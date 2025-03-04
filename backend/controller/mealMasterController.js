import cloudinary from "../lib/cloudinary.config.js";
import { MealMaster } from "../schema/mealMasterSchema.js";

// CRUD Operations For Food Menu (i.e., MealMaster - Breakfast, Launch, and Dinner)
// 1. Create 
export const createMealMaster = async (req, res) => {
    try {
        // check if mealmaster name is already taken or not
        const mealMasterExist = await MealMaster.findOne({ name: req.body.name });
        if (mealMasterExist) {
            return res.status(409).json({
                message: "Name already taken, please choose a different name"
            });
        }

        // upload the image in cloudinary and get the url
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
            message: "Internal server error",
            error: error.message,
        });
    }
};

// 2. Read
export const getAllMealMasters = async (req, res) => {
    try {
        const allMealMasters = await MealMaster.find();
        return res.status(200).json({
            message: "All mealmaster fetched successfully",
            data: allMealMasters,
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        })
    }
};

// 3. Read By Id
export const getMealMasterById = async (req, res) => {
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
            message: "Internal server error",
            error: error.message,
        })
    }
};

// 4. Update By Id
export const updateMealMasterById = async (req, res) => {
    try {
        // image (i.e., update gardaa image pathayo vaney) vako case maa yesaree handle garney
        if (req.file) {
            const cloudinaryResponse = await cloudinary.uploader.upload(req.file.path);
            const updatedMealMaster = await MealMaster.findByIdAndUpdate(
                req.params.id,
                { ...req.body, image: cloudinaryResponse.secure_url },
                { new: true }
            );

            // if product not found while doing update operations
            if (!updatedMealMaster) {
                return res.status(404).json({
                    message: "MealMaster not found"
                });
            }
            return res.status(200).json({
                message: "MealMaster updated successfully",
                data: updatedMealMaster,
            })
        }
        // if image is not uploaded then dont handle the image upload part
        const updatedMealMaster = await MealMaster.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedMealMaster) {
            return res.status(404).json({ message: "Meal Master not found" })
        }
        return res.status(200).json({
            message: "Meal Master Updated Successfully",
            data: updatedMealMaster
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        })
    }
};

// 5. Delete By Id
export const deleteMealMasterById = async (req, res) => {
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
            message: "Internal server error",
            error: error.message,
        })
    }
};