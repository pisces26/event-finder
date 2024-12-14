const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/User.js");
require("dotenv").config();

const app = express();
const port = 3000;

// Salt rounds for bcrypt
const bcryptSalt = bcrypt.genSaltSync(12);

// Enable CORS for front-end access
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000", "http://192.168.1.6:3000"],
  })
);

// Middleware to parse JSON request body
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  });

// POST route for user registration
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  // Validate the input data
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Hash the password and create the user
    const hashedPassword = bcrypt.hashSync(password, bcryptSalt);
    const userDoc = await User.create({ name, email, password: hashedPassword });

    // Respond with the user data
    res.status(201).json({
      message: "User registered successfully!",
      data: { name: userDoc.name, email: userDoc.email },
    });
  } catch (error) {
    console.error("Error registering user:", error);

    // Handle duplicate email error
    if (error.code === 11000) {
      return res.status(409).json({ message: "Email is already in use." });
    }

    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
