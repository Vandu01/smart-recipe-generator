import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";
import SearchRecipe from "./pages/SearchRecipe";
import RateRecipe from "./pages/RateRecipe";
import Recommend from "./pages/Recommend";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddRecipe />} />
        <Route path="/search" element={<SearchRecipe />} />
        <Route path="/rate" element={<RateRecipe />} />
        <Route path="/recommend" element={<Recommend />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
