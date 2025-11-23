import { useState } from "react";
import API from "../axios";

export default function SearchRecipe() {
  const [ingredients, setIngredients] = useState("");
  const [results, setResults] = useState([]);

  const search = async () => {
    const res = await API.post("/search", {
      ingredients: ingredients.split(",").map(i => i.trim())
    });
    setResults(res.data.data);
  };

  return (
    <div className="box">
      <h2>Search Recipes</h2>

      <input
        placeholder="Ingredients (comma separated)"
        onChange={(e) => setIngredients(e.target.value)}
      />

      <button onClick={search}>Search</button>

      <h3>Results:</h3>

      {results.map((r) => (
        <p key={r._id}>
          <b>{r.name}</b> — ID: {r._id}
        </p>
      ))}
    </div>
  );
}
