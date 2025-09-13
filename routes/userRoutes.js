const express = require("express");
const { getUsers, registerUser } = require("../controllers/userController");

const router = express.Router();

// GET all users
router.get("/", getUsers);

// POST register
router.post("/register", registerUser);

module.exports = router;
