import { useState } from "react";
import API from "../axios";

export default function RateRecipe() {
  const [id, setId] = useState("");
  const [rating, setRating] = useState("");

  const rate = async () => {
    await API.post(`/rate/${id}`, { rating: Number(rating) });
    alert("Rating Added!");
  };

  return (
    <div className="box">
      <h2>Rate a Recipe</h2>

      <input
        placeholder="Recipe ID"
        onChange={(e) => setId(e.target.value)}
      />

      <input
        placeholder="Rating (1-5)"
        onChange={(e) => setRating(e.target.value)}
      />

      <button onClick={rate}>Rate</button>
    </div>
  );
}
