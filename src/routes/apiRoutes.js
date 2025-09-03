const express = require("express");
const router = express.Router()
const pool = require("../config/db")
const authController = require("../controllers/authController");

router.get("/ping",(req,res)=>{
    res.json({message:"API is working"});
});

router.get("/test",async(req,res,next)=>{
    try{
        const result = await pool.query("SELECT NOW()");
        res.json({message:"API working!",dbTime:result.rows[0].now});
    }catch(err){
        next(err);
    }

});

router.post("/login",authController.login)
module.exports = router;
