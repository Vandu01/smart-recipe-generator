import { useState } from "react";
import API from "../axios";

export default function AddRecipe() {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  // NEW STATES
  const [difficulty, setDifficulty] = useState("easy");
  const [diet, setDiet] = useState("normal");
  const [time, setTime] = useState(10);

  const add = async () => {
    await API.post("/add", {
      name,
      ingredients: ingredients.split(",").map(i => i.trim()),
      instructions,
      difficulty,
      diet,
      cookingTime: Number(time)
    });

    alert("Recipe Added!");
  };

  return (
    <div className="box">
      <h2>Add Recipe</h2>

      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Ingredients (comma separated)"
        onChange={(e) => setIngredients(e.target.value)}
      />

      <textarea
        placeholder="Instructions"
        onChange={(e) => setInstructions(e.target.value)}
      />

      {/* NEW FIELDS */}
      <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <select value={diet} onChange={(e) => setDiet(e.target.value)}>
        <option value="normal">Normal</option>
        <option value="veg">Veg</option>
        <option value="vegan">Vegan</option>
         
      </select>

      <input
        type="number"
        placeholder="Cooking Time (mins)"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <button onClick={add}>Add</button>
    </div>
  );
}
