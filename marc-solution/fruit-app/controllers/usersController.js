const express = require("express");
const router = express.Router();

const users = require("../models/users");

router.get("/", (req, res) => {
  res.render("users/index.ejs", {
    users: users,
  });
});

module.exports = router;
