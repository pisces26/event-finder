import UserModel from "./models/User.js";
import { dbConnector } from "./database.js";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, password } = req.body;
  console.log("in user register");
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    await dbConnector();
    const userDoc = await UserModel.create({ name, email, password });
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
}