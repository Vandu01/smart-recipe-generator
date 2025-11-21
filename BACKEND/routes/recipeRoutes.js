

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "Recipe API Working!" });
});

module.exports = router;
