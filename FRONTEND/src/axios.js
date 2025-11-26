import axios from "axios";

const API = axios.create({
  baseURL: "https://smart-recipe-generator-p7mo.onrender.com/api/recipes",
});

export default API;
