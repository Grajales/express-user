const express = require("express");
const router = express.Router();

const users = require("../models/users");

// INDEX
router.get("/", (req, res) => {
  res.render("users/index.ejs", {
    users: users,
  });
});

// SIGNUP
router.get("/signup", (req, res) => {
  res.render("users/signup.ejs");
});

module.exports = router;
