import AdminModel from "../models/Admin.js";

const adminLogin = async (req, res) => {
  console.log("Request received at /adminLogin:", req.body);

  const { email, password } = req.body;
  if (!email || !password) {
    console.log("Missing email or password"); // Debug
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const admin = await AdminModel.findOne({ email });
    console.log("Admin found in DB:", admin);

    if (!admin) {
      console.log("Admin not found for email:", email);
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Handle plain text passwords
    if (password !== admin.password) { 
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

export {adminLogin};
