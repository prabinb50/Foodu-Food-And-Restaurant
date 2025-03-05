import { User } from "../schema/userSchema.js";
import bcrypt from "bcrypt";
const saltRounds = 10;
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

// Create/Register User
export const registerUser = async (req, res) => {
    try {
        // check if user already exists
        const userExists = await User.findOne({ email: req.body.email });
        if (userExists) {
            return res.status(409).json({
                message: "User already exists with this email please choose another email"
            })
        }

        // Hash the password before saving it to the database
        const hashPassword = await bcrypt.hash(req.body.password, saltRounds);

        const newRegisteredUser = await new User({ ...req.body, password: hashPassword }).save();
        return res.status(201).json({
            message: "User registered suceessfully",
            data: newRegisteredUser
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error while registering/creating user",
            error: error,
        })
    }
};

// login user
export const loginUser = async (req, res) => {
    try {
        // check if the user exists or not
        const userExists = await User.findOne({ email: req.body.email });
        if (!userExists) {
            return res.status(409).json({
                message: "You are not registered yet, please register before login"
            })
        }

        // if user exists, compare the password
        const isPasswordMatched = await bcrypt.compare(req.body.password, userExists.password);
        if (!isPasswordMatched) {
            return res.status(401).json({
                message: "Password is not correct"
            })
        }
        // if password matched then generate the token
        const myToken = jwt.sign({ email: userExists.email }, "this_is_private_key", { expiresIn: "24h" });
        console.log(myToken);
        return res.status(200).json({
            message: "User logged in successfully",
            token: myToken,
            user: userExists
        });

    } catch (error) {
        return res.status(500).json({
            message: "Error while loging user",
            error: error,
        })
    }
};

// Get all users
export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find();

        // ensure users exist before returning data
        if (allUsers.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }
        return res.status(200).json({
            message: "All users fetched succesfully",
            data: allUsers
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error in fetching users",
            error: error
        })
    }
};

// Get user by Id
export const getUserById = async (req, res) => {
    try {
        // Validate the id format before querying
        // Validate MongoDB ObjectId format
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                message: "Invalid user ID format",
                error: error.message
            });
        }

        const singleUser = await User.findById(req.params.id);
        if (!singleUser) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({
            message: "Single user fetched successfully",
            data: singleUser,
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        })
    }
};

// Update user by Id
export const updateUserById = async (req, res) => {
    try {
        // Validate MongoDB ObjectId format
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid user ID format" });
        }

        // if image is not uploaded in user's operations then dont handle the image upload part
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" })
        }
        return res.status(200).json({
            message: "User Updated Successfully",
            data: updatedUser
        })
    } catch (error) {
        return res.status(500).json({
            message: "Interval server error",
            error: error,
        })
    }
};

// delete user by Id
export const deleteUserById = async (req, res) => {
    try {
        // Validate MongoDB ObjectId format
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid user ID format" });
        }

        // Check if the user exists
        const checkUser = await User.findById(req.params.id);
        if (!checkUser) {
            return res.status(404).json({
                message: "User not found.",
            });
        }

        const deletedUser = await User.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            message: "User data delete successfully.",
            data: deletedUser,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error.",
            error: error,
        });
    }
};