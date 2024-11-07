import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import createUser  from "./models/User.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// (async () => {
//   try {
//     const testUser = await createUser("Test Name", "test@example.com", "password123");
//     console.log("User created successfully:", testUser);
//   } catch (error) {
//     console.error("Error creating test user:", error.message || error);
//   }
// })();


app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
