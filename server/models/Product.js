import pool from "../config/db.js";

export const createProduct = async (name, description, price, stock) => {
  const result = await pool.query(
    `INSERT INTO products (name, description, price, stock) VALUES ($1, $2, $3, $4) RETURNING *`,
    [name, description, price, stock]
  );
  return result.rows[0];
};

export const getAllProducts = async () => {
  const result = await pool.query(`SELECT * FROM products`);
  return result.rows;
};

