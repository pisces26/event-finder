import UserModel from "../models/User.js";

const userLogin = async (req, res) => {
  console.log("Request received at /login:", req.body);

  const { email, password } = req.body;
  if (!email || !password) {
    console.log("Missing email or password"); // Debug
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const user = await UserModel.findOne({ email });
    console.log("User found in DB:", user);

    if (!user) {
      console.log("User not found for email:", email);
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Handle plain text passwords or hashed passwords
    if (password !== user.password) { // Replace with bcrypt for hashed passwords
      console.log("Password mismatch for email:", email);
      return res.status(400).json({ message: "Invalid email or password" });
    }

    console.log("Login successful for:", email);
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error during login:", error.stack || error.message);
    res.status(500).json({ message: "Server error" });
  }
};

export { userLogin };
