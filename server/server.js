import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import cartRoutes from "./routers/cartRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/cart", cartRoutes);

// Database Connection
// Database Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((error) => console.log("❌ MongoDB Connection Error:", error));


// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
