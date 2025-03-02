import express from "express";
import mongoose from "mongoose";
import { Product } from "./schema/productSchema.js";
import { Category } from "./schema/categorySchema.js";
import multer from "multer";
const upload = multer({ dest: "uploads/" });
import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// configure the server
const app = express();

// middleware
app.use(express.json());

// connect databasen MongoDB
try {
  mongoose.connect(
    "mongodb+srv://yangmalama02:l7uajwH8QK5sTMdZ@cluster0.hqc45.mongodb.net/ecommerce-db?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("MongoDB connection successful!!");
} catch (error) {
  console.log("MongoDB connection error!, error");
}

// create a product
app.post("/products", async (req, res) => {
  try {
    // check product name is alrady taken or not
    const productExist = await Product.findOne({ name: req.body.name });
    if (productExist) {
      return res.status(409).json({
        message: " Produt name already taken , select different name",
      });
    }
    const newProduct = await new Product(req.body).save();
    return res.status(201).json({
      message: "Product created sucessfully",
      data: newProduct,
    });
  } catch (error) {
    console.log("creating a product failed");
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

// get all products
app.get("/products", async (req, res) => {
  try {
    const allProduct = await Product.find();
    return res.status(200).json({
      message: "all procduct fetched sucessfully",
      data: allProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

// Get single product
app.get("/products/:id", async (req, res) => {
  try {
    const singleProduct = await Product.findById(req.params.id);
    return res.status(200).json({
      message: "Single procduct fetched sucessfully",
      data: singleProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

// update the product
app.patch("/products/:id", async (req, res) => {
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updateProduct) {
      return res.status(404).json({
        message: "Product not found!!!!!!!!!!",
      });
    }
    return res.status(200).json({
      message: "Product Updated!!!!!!!!!!",
      data: updateProduct,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server error" });
  }
});

// delete product
app.delete("/products/:id", async (req, res) => {
  try {
    const checkProduct = await Product.findById(req.params.id);
    if (!checkProduct) {
      return res.status(404).json({
        message: "Product not found",
        data: checkProduct,
      });
    }

    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      message: "Procduct deleted sucessfully",
      data: deletedProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

// Category CRUD
app.post("/categories", upload.single("imageUrl"), async (req, res) => {
  try {
    // check if category name already exists
    const categoryExist = await Category.findOne({ name: req.body.name });
    if (categoryExist) {
      return res.status(409).json({ message: "Category already exist" });
    }
    // Handle the image upload before saving to database
    console.log(req.file);
    const cloudinaryResponse = await cloudinary.uploader.upload(req.file.path);
    console.log(cloudinaryResponse);

    const newCategory = await new Category({
      ...req.body,
      imageUrl: cloudinaryResponse.secure_url,
    }).save();
    return res.status(201).json({
      message: "Category created sucessfully",
      data: newCategory,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server error" });
  }
});

app.get("/categories", async (req, res) => {
  try {
    const allCategories = await Category.find();
    return res.status(200).json({
      message: "All categories fetched sucessfully",
      data: allCategories,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server error" });
  }
});

app.get("/categories/:id", async (req, res) => {
  try {
    const singleCategory = await Category.findById(req.params.id);
    if (!singleCategory) {
      return res.status(404).json({
        message: "Category not found",
      });
    }
    return res.status(200).json({
      message: "Sinlge Category fetcheed sucessfully",
      data: singleCategory,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server error" });
  }
});

app.patch("/categories/:id", async (req, res) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.status(200).json({
      message: "Category updated",
      data: updatedCategory,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server error" });
  }
});

app.delete("/categories/:id", async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    if (!deletedCategory) {
      return res.status(404).json({
        message: "Category doesnot exist",
      });
    }
    return res.status(200).json({
      message: "Category Deleted sucessfully!!",
      data: deletedCategory,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server error" });
  }
});

// check user
// check database
// Configure server+

app.get("/", (req, res) => {
  res.send("Server is okokokokokokkkkk....");
});

app.listen(4000, () => {
  console.log("Server started at http://localhost:4000");
});