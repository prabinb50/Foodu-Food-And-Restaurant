import cloudinary from "../lib/cloudinary.config.js";
import { NewsAndBlog } from "../schema/newsAndBlogSchema.js"

// CRUD Operations For News & Blog (i.e., NewsAndBlog - Burger, Food, And Piza)
// 1. Create
export const createNewsAndBlog = async (req, res) => {
    try {
        // check if newsandblog category is already taken or not
        const newsAndBlogExist = await NewsAndBlog.findOne({ category: req.body.category });
        if (newsAndBlogExist) {
            return res.status(409).json({
                message: "Category already taken, please choose a different name"
            })
        }

        // upload the image in cloudinary and get the url
        // handle the image upload before saving to database
        const cloudinaryResponse = await cloudinary.uploader.upload(req.file.path);

        const newNewsAndBlog = await new NewsAndBlog({
            ...req.body,
            image: cloudinaryResponse.secure_url
        }).save();
        return res.status(201).json({
            message: "NewsAndBlog created successfully",
            data: newNewsAndBlog,
        })
    } catch (error) {
        return res.status(500).json({
            message: "Interval server error",
            error: error
        })
    }
}

// 2. Read
export const getAllNewsAndBlog = async (req, res) => {
    try {
        const allNewsAndBlog = await NewsAndBlog.find();
        return res.status(200).json({
            message: "All news & blog fetched successfully",
            data: allNewsAndBlog,
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error
        })
    }
}

// 3. Read By Id
export const getNewsAndBlogById = async (req, res) => {
    try {
        const singleNewsAndBlog = await NewsAndBlog.findById(req.params.id);
        if (!singleNewsAndBlog) {
            return res.status(404).json({
                message: "news & blog not found",
            });
        }
        return res.status(200).json({
            message: "Single news & blog fetched successfully",
            data: singleNewsAndBlog,
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        })
    }
};

// 4. Update By Id
export const updateNewsAndBlogById = async (req, res) => {
    try {
        // image (i.e., update gardaa image pathayo vaney) vako case maa yesaree handle garney
        if (req.file) {
            const cloudinaryResponse = await cloudinary.uploader.upload(req.file.path);

            const updatedNewsAndBlog = await NewsAndBlog.findByIdAndUpdate(
                req.params.id,
                { ...req.body, image: cloudinaryResponse.secure_url },
                { new: true }
            );

            // if news & blog not found while doing update operations
            if (!updatedNewsAndBlog) {
                return res.status(404).json({
                    message: "News & Blog not found"
                });
            }
            return res.status(200).json({
                message: "News & Blog updated successfully",
                data: updatedNewsAndBlog,
            })
        }
        // if image is not uploaded then dont handle the image upload part
        const updatedNewsAndBlog = await NewsAndBlog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedNewsAndBlog) {
            return res.status(404).json({ message: "News & Blog not found" })
        }
        return res.status(200).json({
            message: "News & Blog Updated Successfully",
            data: updatedNewsAndBlog
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        })
    }
}

// 5. Delete By Id
export const deleteNewsAndBlogById = async (req, res) => {
    try {
        const deletedNewsAndBlog = await NewsAndBlog.findByIdAndDelete(req.params.id);
        if (!deletedNewsAndBlog) {
            return res.status(404).json({
                message: "News & Blog not found"
            });
        }
        return res.status(200).json({
            message: "News & Blog deleted successfully",
            data: deletedNewsAndBlog,
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        })
    }
};