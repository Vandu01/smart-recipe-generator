import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";
import SearchRecipe from "./pages/SearchRecipe";
import RateRecipe from "./pages/RateRecipe";
import Recommend from "./pages/Recommend";
import FilterRecipe from "./pages/FilterRecipe";
import AllRecipes from "./pages/AllRecipe";

function App() {
  return (
    <div className="app-layout">
      <BrowserRouter>
        
        <Navbar />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddRecipe />} />
            <Route path="/search" element={<SearchRecipe />} />
            <Route path="/rate" element={<RateRecipe />} />
            <Route path="/recommend" element={<Recommend />} />
            <Route path="/filter" element={<FilterRecipe />} />
            <Route path="/all" element={<AllRecipes />} />
          </Routes>
        </div>

        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
