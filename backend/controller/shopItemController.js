import cloudinary from "../lib/cloudinary.config.js";
import { ShopItem } from "../schema/shopItemSchema.js";

// CRUD Operations
// 1. Create
export const createShopItem = async (req, res) => {
    try {
        // check if shop item name is already taken or not
        const shopItemExist = await ShopItem.findOne({ name: req.body.name });
        if (shopItemExist) {
            return res.status(409).json({
                message: "Name already taken, please choose a different name",
            });
        }

        // upload the image in cloudinary and get the url
        // Handle the image upload before saving to database
        const cloudinaryResponse = await cloudinary.uploader.upload(req.file.path);

        const newShopItem = await new ShopItem({
            ...req.body,
            image: cloudinaryResponse.secure_url,
        }).save();
        return res.status(201).json({
            message: "Shop item created successfully",
            data: newShopItem,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
}

// 2. Read
export const getAllShopItems = async (req, res) => {
    try {
        const allShopItems = await ShopItem.find();
        return res.status(200).json({
            message: "All shop items fetched successfully",
            data: allShopItems,
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        })
    }
}

// 3. Read By Id
export const getShopItemById = async (req, res) => {
    try {
        const singleShopItem = await ShopItem.findById(req.params.id);
        if (!singleShopItem) {
            return res.status(404).json({
                message: "Shop item not found",
            });
        }
        return res.status(200).json({
            message: "Single shop item fetched successfully",
            data: singleShopItem,
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        })
    }
}

// 4. Update
export const updateShopItemById = async (req, res) => {
    try {
        // check if shop item name is already taken or not
        const shopItemExist = await ShopItem.findOne({ name: req.body.name });
        if (shopItemExist) {
            return res.status(409).json({
                message: "Name already taken, please choose a different name",
            });
        }

        // if image is updated, then handle the image upload part
        if (req.file) {
            const cloudinaryResponse = await cloudinary.uploader.upload(req.file.path);

            const updatedShopItem = await ShopItem.findByIdAndUpdate(
                req.params.id,
                {
                    ...req.body,
                    image: cloudinaryResponse.secure_url,
                },
                { new: true }
            );

            // if shop item not found
            if (!updatedShopItem) {
                return res.status(404).json({
                    message: "Shop item not found",
                });
            }
            return res.status(200).json({
                message: "Shop item updated successfully",
                data: updatedShopItem,
            });
        }

        // if image is not updated, then dont handle the image upload part
        const updatedShopItem = await ShopItem.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedShopItem) {
            return res.status(404).json({
                message: "Shop item not found",
            });
        }
        return res.status(200).json({
            message: "Shop item updated successfully",
            data: updatedShopItem,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
}

// 5. Delete
export const deleteShopItemById = async (req, res) => {
    try {
        const deletedShopItem = await ShopItem.findByIdAndDelete(req.params.id);
        if (!deletedShopItem) {
            return res.status(404).json({
                message: "Shop item not found",
            });
        }
        return res.status(200).json({
            message: "Shop item deleted successfully",
            data: deletedShopItem,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
}