import express from "express";
import { createOrder, getUserOrders } from "../models/Order.js";

const router = express.Router();

router.post("/create", async (req, res) => {
  const { user_id, total } = req.body;
  try {
    const order = await createOrder(user_id, total);
    res.status(201).json(order);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Faild to create order" });
  }
});

router.get("/:user_id", async (req, res) => {
  const user_id = parseInt(req.params.user_id, 10); // Ensure user_id is an integer
  if (isNaN(user_id)) {
    return res.status(400).json({ error: "Invalid user ID" });
  }

  try {
    const orders = await getUserOrders(user_id);
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching user orders:", error);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});


export default router;
