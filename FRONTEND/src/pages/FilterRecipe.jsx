import { useState } from "react";
import API from "../axios";

export default function FilterRecipe() {

  const [difficulty, setDifficulty] = useState("");
  const [diet, setDiet] = useState("");
  const [time, setTime] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleFilter = async () => {
    const res = await API.get("/filter", {
      params: {
        difficulty,
        diet,
        maxTime: time
      }
    });

    setRecipes(res.data.data);
  };

  return (
    <div className="box">
      <h2>Filter Recipes</h2>

      <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
        <option value="">Select Difficulty</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <select value={diet} onChange={(e) => setDiet(e.target.value)}>
        <option value="">Select Diet</option>
        <option value="normal">Normal</option>
        <option value="veg">Veg</option>
        <option value="vegan">Vegan</option>
      </select>

      <input
        type="number"
        placeholder="Max Cooking Time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <button onClick={handleFilter}>Apply Filters</button>

      <ul>
        {recipes.map((r) => (
          <li key={r._id}>{r.name}</li>
        ))}
      </ul>
    </div>
  );
}
