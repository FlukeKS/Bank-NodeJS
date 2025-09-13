const express = require("express");
const { getUsers, registerUser } = require("../controllers/userController");

const router = express.Router();

router.get("/", getUsers);            // GET /api/users
router.post("/register", registerUser); // POST /api/users/register

module.exports = router;
