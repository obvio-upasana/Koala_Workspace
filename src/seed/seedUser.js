const bcrypt = require("bcryptjs");
const pool = require("../config/db");
(async ()=>{
    try{
        const hashPassword = await bcrypt.hash("password123",10);
        await pool.query(
            `insert into users (user_id,email,password,role) values($1,$2,$3,$4) on conflict(email) do nothing`,
            ["alice123","alice123@gmail.com",hashPassword,"client"]
        );

        console.log("Test user Inserted:userID=alice123,email=alice123@gmail.com,password=password123");
        process.exit();
    }catch(err){
        console.error("Seeder error",err)
        process.exit(1);
    }
})(); 
