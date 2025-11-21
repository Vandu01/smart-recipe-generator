const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./database/db");


// Load environment variables
dotenv.config({ path: "./config/.env" });

// Connect MongoDB
connectDB();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
const recipeRoutes = require("./routes/recipeRoutes");
app.use("/api/recipes", recipeRoutes);

// default route
app.get("/", (req, res) => {
  res.send("Smart Recipe Generator Backend Running...");
});

module.exports = app;

