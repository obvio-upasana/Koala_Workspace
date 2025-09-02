const errorMiddleware = (err,req,res,next)=>{
    console.error("Error",error.message);
    res.status(500).json({
        status:"error",
        message:error.message||"Something went wrong"
    });
};

module.exports=errorMiddleware;
