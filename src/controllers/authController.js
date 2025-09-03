const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {finduser}=require("../models/userModel");

const login = async (req,res)=>{
    try{
          console.log("REQ BODY:", req.body);
          const {identify,password} = req.body

          const user = await finduser(identify);
    if(!user){
        return res.status(400).json({
            message:"Invalid user or password"
        });
    }
    const isMatch = await bycrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(400).json({
            message:"Invalid user or password"
        });
    }

    const token = jwt.sign(
        {id:user.id,role:user.role},
        process.env.JWT_SECRET,
        {expiresIn:"1hr"}
    );
    res.json({
         message:"Login successfull",
        token,
        token,
        role:user.role
    });

    }catch(err){
        console.error("Login error:",err.message);
        res.status(500).json({message:"Server error",error:err.message});
    }
};
module.exports = {login};
