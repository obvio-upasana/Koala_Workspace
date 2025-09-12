const pool = require("../config/db");

const finduser = async (user_id) => {
    const result = await pool.query(
        `SELECT * FROM users WHERE user_id = $1`,
        [user_id]
    );

    console.log("DB RESULT:", result.rows);

    // Return the first row (or null if not found)
    return result.rows[0] || null;
};

module.exports = { finduser };
