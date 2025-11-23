import { useState, useEffect } from "react";
import API from "../axios";

export default function AllRecipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    loadRecipes();
  }, []);

  const loadRecipes = async () => {
    const res = await API.get("/all");
    setRecipes(res.data.data);
  };

  return (
    <div className="box">
      <h2>All Recipes</h2>

      {recipes.length === 0 && <p>No recipes found.</p>}

      {recipes.map((r) => (
        <div key={r._id} style={{ marginBottom: "15px" }}>
          <h3>{r.name}</h3>
          <p><b>Ingredients:</b> {r.ingredients.join(", ")}</p>
          <p><b>Instructions:</b> {r.instructions}</p>
          <p><b>Ratings:</b> {r.ratings.length ? r.ratings.join(", ") : "No ratings yet"}</p>

          <hr />
        </div>
      ))}
    </div>
  );
}
