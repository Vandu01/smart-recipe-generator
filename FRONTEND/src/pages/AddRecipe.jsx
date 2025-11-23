import { useState } from "react";
import API from "../axios";

export default function AddRecipe() {

  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const add = async () => {
    await API.post("/add", {
      name,
      ingredients: ingredients.split(","),
      instructions
    });

    alert("Recipe Added!");
  };

  return (
    <div className="box">
      <h2>Add Recipe</h2>

      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Ingredients (comma separated)" onChange={(e) => setIngredients(e.target.value)} />
      <textarea placeholder="Instructions" onChange={(e) => setInstructions(e.target.value)} />
      
      <button onClick={add}>Add</button>
    </div>
  );
}
