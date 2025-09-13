// mock data (ยังไม่เชื่อม DB จริง)
let users = [
  { id: 1, username: "alice" },
  { id: 2, username: "bob" },
];

// GET /api/users
const getUsers = (req, res) => {
  res.json(users);
};

// POST /api/users/register
const registerUser = (req, res) => {
  const { username } = req.body;
  const newUser = { id: users.length + 1, username };
  users.push(newUser);
  res.status(201).json(newUser);
};

module.exports = { getUsers, registerUser };
