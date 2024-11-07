import express from "express";
import createUser from "../models/User.js"; // Ensure this path is correct

const router = express.Router();

// // Register a new user
// router.post('/register', async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: "User already exists" });
//     }

//     // Create a new user instance
//     const newUser = new User({
//       name,
//       email,
//       password, // Note: password hashing is typically needed here
//     });

//     // Save the new user to the database
//     const savedUser = await newUser.save();
//     res.status(201).json(savedUser);
//   } catch (error) {
//     res.status(500).json({ error: "Error creating user" });
//   }
// });

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await createUser(name, email, password);
    res.status(201).json(user);
  } catch (error) {
    console.error("Error creating user:", error.message);
    res.status(500).json({ error: error.message || "Error creating user" });
  }
});

export default router;
