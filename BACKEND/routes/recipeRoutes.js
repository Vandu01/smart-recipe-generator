const express = require("express");
const router = express.Router();

const {
    addRecipe,
    getAllRecipes,
    searchRecipes,
    filterRecipes,
    rateRecipe,
    getRecommendations
} = require("../controllers/recipeController");

// add recipe
router.post("/add", addRecipe);

// get all recipes
router.get("/all", getAllRecipes);

// search by ingredients
router.post("/search", searchRecipes);

// filter
router.get("/filter", filterRecipes);

// rate a recipe
router.post("/rate/:id", rateRecipe);

// recommendations
router.get("/recommend", getRecommendations);

module.exports = router;


