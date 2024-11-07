import pool from "../config/db.js";

export const createOrder = async (user_id, total, status = "pending") => {
  try {
    const result = await pool.query(
      `INSERT INTO orders (user_id, total, status) VALUES ($1, $2, $3) RETURNING *`,
      [user_id, total, status]
    );

    if (result.rows.length === 0) {
      throw new Error("Order creation failed - no rows returned.");
    }

    console.log("Order created successfully:", result.rows[0]);
    return result.rows[0];
  } catch (error) {
    console.error("Error in createOrder:", error);
    throw error;
  }
};

export const getUserOrders = async (user_id) => {
  try {
    const result = await pool.query(`SELECT * FROM orders WHERE user_id = $1`, [user_id]);
    return result.rows;
  } catch (error) {
    console.error("Error fetching user orders:", error);
    throw error;
  }
};


// export default { createOrder, getUserOrders };
