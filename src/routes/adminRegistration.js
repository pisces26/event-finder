
import AdminModel from "../models/Admin.js";
const adminRegister = async (req, res) => {
    const { name, email, password } = req.body;
    console.log("in admin register");
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }
  
    try {
      const adminDoc = await AdminModel.create({ name, email, password });
      res.status(201).json({
        message: "Admin registered successfully!",
        data: { name: adminDoc.name, email: adminDoc.email },
      });
    } catch (error) {
      console.error("Error registering admin:", error);
  
      // Handle duplicate email error
      if (error.code === 11000) {
        return res.status(409).json({ message: "Email is already in use." });
      }
  
      res.status(500).json({ message: "Internal Server Error" });
    } finally {
    }

}
export { adminRegister };