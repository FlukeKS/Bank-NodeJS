const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");

const app = express();

// middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use("/api/users", userRoutes);

// health check
app.get("/", (req, res) => {
  res.json({ message: "Bank System API is running 🚀" });
});

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server: http://localhost:${PORT}`));
