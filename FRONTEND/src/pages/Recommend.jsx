import { useState } from "react";
import API from "../axios";

export default function Recommend() {

  const [list, setList] = useState([]);

  const load = async () => {
    const res = await API.get("/recommend");
    setList(res.data.data);
  };

  return (
    <div className="box">
      <h2>Top Recommendations</h2>

      <button onClick={load}>Load</button>

      {list.map((r) => (
        <p key={r._id}>
          <b>{r.name}</b> — Ratings: {r.ratings.join(", ")}
        </p>
      ))}
    </div>
  );
}
