import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import mealMasterRoute from "./routes/mealMasterRoute.js";
import userRoute from "./routes/userRoute.js";

const router = express.Router();

export const app = express(); // configure the server

app.use(express.json()); // middleware (for json)

// connect to mongodb database
try {
    mongoose.connect("mongodb+srv://joshiprabin17:QJZbtY9IIagET6cw@cluster0.i5iob.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("MongoDB Connection Success");
} catch (error) {
    console.log("MangoDB Connection Error", error);
}

app.use("/mealMaster", mealMasterRoute);
app.use("/users", userRoute);

app.listen(4000, () => {
    console.log(`Example app listening on port ${process.env.APP_PORT}`);
})

app.get("/", (req, res) => {
    res.send("server is working");
})