
const express = require("express");
const cors = require("cors");
const dotenv= require("dotenv");

//config environment
dotenv.config();

const app = express();

//middlewares
app.use(cors());
app.use(express.json());


// server listen
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});