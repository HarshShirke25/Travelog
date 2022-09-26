const express = require("express");
const router = express.Router();

require("../db/conn");

const User = require("../models/userSchema");

router.get("/", (req, res) => {
  res.send("Router res");
});

router.post("/register", (req, res) => {
  const { name, email, phone, location, password, cpassword } = req.body;
  if (!name || !email || !phone || !location || !password || !cpassword) {
    return res.status(422).json({ error: "Error" });
  }
});

module.exports = router;
