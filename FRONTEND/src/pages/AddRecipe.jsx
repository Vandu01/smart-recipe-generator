import { useState } from "react";
import API from "../axios";

export default function AddRecipe() {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  // extra fields
  const [difficulty, setDifficulty] = useState("easy");
  const [diet, setDiet] = useState("normal");

  // NEW: separate cooking time fields
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const add = async () => {
    await API.post("/add", {
      name,
      ingredients: ingredients.split(",").map((i) => i.trim()),
      instructions,
      difficulty,
      diet,
      cookingTime: {
        minutes: Number(minutes),
        seconds: Number(seconds)
      }
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

      {/* Difficulty */}
      <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      {/* Diet */}
      <select value={diet} onChange={(e) => setDiet(e.target.value)}>
        <option value="normal">Normal</option>
        <option value="veg">Veg</option>
        <option value="vegan">Vegan</option>
      </select>

      {/* New cooking time inputs */}
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="number"
          placeholder="Minutes"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
        />

        <input
          type="number"
          placeholder="Seconds"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
        />
      </div>

      <button onClick={add}>Add</button>
    </div>
  );
}
