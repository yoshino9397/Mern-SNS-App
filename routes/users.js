const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

//update user
router.put("/:id", async (req, res) => {
  res.send("hey its user route");
});

//delete user
//get a user
//follow a user
/// unfollow a user
module.exports = router;
