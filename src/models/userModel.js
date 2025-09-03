const pool = require("../config/db");

const findbyemail = async (email)=>{
    const result = await pool.query(
        "select * from users where email=1",[email]
    );
    return result.row[0];
};
module.exports = {findbyemail};
