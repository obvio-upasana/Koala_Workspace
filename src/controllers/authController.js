const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {findbyemail}=require("../models/userModel");

const login = async (req,res)=>{
    console.log("REQ BODY:", req.body);
        const{password} = req.body;
        const{email} = req;
        

    try{
    const user = await findbyemail(email);
    if(!user){
        return res.status(401).json({
            message:"Invalid email or password"
        });
    }
    // const isMatch = await (password,user.password);
    if(password != user.password){
        return res.status(401).json({
            message:"Invalid email or password"
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
        role:user.role
    });

    }catch(err){
        console.error("Login error:",err.message);
        res.status(500).json({message:"Server error"});
    }
};
module.exports ={login};
