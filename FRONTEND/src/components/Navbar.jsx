import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <h2>Smart Recipe App</h2>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/add">Add Recipe</Link>
        <Link to="/search">Search</Link>
        <Link to="/rate">Rate</Link>
        <Link to="/recommend">Recommend</Link>
      </div>
    </nav>
  );
}
