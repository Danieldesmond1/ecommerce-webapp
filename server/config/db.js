import pkg from "pg";
import events from "events";
const { Pool } = pkg;
import 'dotenv/config';


events.EventEmitter.defaultMaxListeners = 15;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT, 10),
});

// pool.query('SELECT NOW()', (err, res) => {
//   if (err) {
//     console.error("Error connecting to the database:", err);
//   } else {
//     console.log("Database connected successfully:", res.rows[0].now);
//   }
// });


export default pool;
