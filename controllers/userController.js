// mock data ชั่วคราว
let users = [
  { id: 1, username: "alice" },
  { id: 2, username: "bob" },
];

const getUsers = (req, res) => {
  res.json(users);
};

const registerUser = (req, res) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ message: "username is required" });
  const newUser = { id: users.length + 1, username };
  users.push(newUser);
  res.status(201).json(newUser);
};

module.exports = { getUsers, registerUser };
