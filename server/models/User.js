import pool from "../config/db.js";

// const createUser = async (name, email, password) => {
//   const result = await pool.query(
//     "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
//     [name, email, password]
//   );
//   return result.rows[0];
// };

const createUser = async (name, email, password) => {
  // Check if the email already exists
  const existingUser = await pool.query(`SELECT * FROM users WHERE email = $1`, [email]);
  
  if (existingUser.rows.length > 0) {
    throw new Error("Email already exists"); // This will be caught in the route
  }
  
  // Proceed to create the user if no duplicates are found
  const result = await pool.query(
    `INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *`,
    [name, email, password]
  );
  return result.rows[0];
};

export default createUser;
