const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "Get all appointments" });
});

router.post("/", (req, res) => {
    res.json({ message: "Create a new appointment" });
});

module.exports = router;