const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./database/db");

// Load environment variables
dotenv.config({ path: "./config/.env" });

// Connect MongoDB
connectDB();

const app = express();


app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://spontaneous-pithivier-532b61.netlify.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
  allowedHeaders: ["Content-Type"]
}));

// Handle preflight requests
app.options("*", cors());  

app.use(express.json());

// Routes
const recipeRoutes = require("./routes/recipeRoutes");
app.use("/api/recipes", recipeRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Smart Recipe Generator Backend Running...");
});

module.exports = app;
