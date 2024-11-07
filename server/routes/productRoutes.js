import express from "express";
import { createProduct, getAllProducts } from "../models/Product.js";

const router = express.Router();

router.post("/add", async (req, res) => {
  const { name, description, price, stock } = req.body;
  try {
    const product = await createProduct(name, description, price, stock);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to add product" });
  }
});

router.get("/", async (req, res) => {
  try {
    const products = await getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

export default router;
