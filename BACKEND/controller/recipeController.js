const Recipe = require("../models/recipeModel");

// Add a recipe
exports.addRecipe = async (req, res) => {
    try {
        const { name, ingredients, instructions } = req.body;

        if (!name || !ingredients || !instructions) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const recipe = await Recipe.create({
            name,
            ingredients,
            instructions,
            ratings: []
        });

        res.status(201).json({
            success: true,
            message: "Recipe added successfully",
            data: recipe
        });

    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

// Get all recipes
exports.getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.status(200).json({ success: true, data: recipes });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

// Search recipes by ingredients
exports.searchRecipes = async (req, res) => {
    try {
        const { ingredients } = req.body;

        if (!ingredients || !Array.isArray(ingredients)) {
            return res.status(400).json({ message: "Ingredients must be an array" });
        }

        const recipes = await Recipe.find({
            ingredients: { $in: ingredients }
        });

        res.status(200).json({
            success: true,
            count: recipes.length,
            data: recipes
        });

    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

// Filter recipes (difficulty, diet, time)
exports.filterRecipes = async (req, res) => {
    try {
        const { difficulty, diet, maxTime } = req.query;
        let filter = {};

        if (difficulty) filter.difficulty = difficulty;
        if (diet) filter.diet = diet;
        if (maxTime) filter.cookingTime = { $lte: Number(maxTime) };

        const recipes = await Recipe.find(filter);

        res.status(200).json({ success: true, data: recipes });

    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

// Rate a recipe
exports.rateRecipe = async (req, res) => {
    try {
        const recipeId = req.params.id;
        const { rating } = req.body;

        if (!rating || rating < 1 || rating > 5) {
            return res.status(400).json({ message: "Rating must be between 1–5" });
        }

        const recipe = await Recipe.findById(recipeId);
        if (!recipe) return res.status(
