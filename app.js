const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const PORT = 3000;

const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Default route
app.get("/", (req, res) => {
  res.json({ message: "Bank System API is running 🚀" });
});

// Server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
