const pool = require("../config/db");

const finduser= async (identify)=>{
    const query= await pool.query(
        `select * from users where user_id or email=$1`);
        const result = await pool.query(query,[identify]);
    return result.row[0];
};
module.exports = {finduser};
