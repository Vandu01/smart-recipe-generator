import axios from "axios";

const API = axios.create({
  baseURL: "https://smart-recipe-generator-bor6.onrender.com",
});

export default API;
