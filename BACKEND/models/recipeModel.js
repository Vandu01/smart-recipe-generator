const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: String,
  ingredients: [String],
  instructions: String,

  difficulty: {
    type: String,
    default: "easy"
  },
  diet: {
    type: String,
    default: "normal"
  },
  cookingTime: {
    type: Number,
    default: 10
  },
  ratings: {
    type: [Number],
    default: []
  }

}, { timestamps: true });

module.exports = mongoose.model("Recipe", recipeSchema);
