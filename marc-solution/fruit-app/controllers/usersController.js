const express = require("express");
const router = express.Router();

const users = require("../models/users");

// INDEX
router.get("/", (req, res) => {
  console.log(users);
  res.render("users/index.ejs", {
    users: users,
  });
});

// GET SIGNUP FORM
router.get("/signup", (req, res) => {
  res.render("users/signup.ejs");
});

// GET LOGIN
router.get("/login", (req, res) => {
  res.render("users/login.ejs");
});

// POST - CREATE NEW USER FROM SIGNUP
router.post("/", (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.redirect(`/users/profile/${users.length - 1}`);
});

// GET USERS PROFILE
router.get("/profile/:index", (req, res) => {
  res.render("users/profile.ejs", {
    user: users[req.params.index],
    index: req.params.index,
  });
});

module.exports = router;
