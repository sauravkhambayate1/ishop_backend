const {userModel} = require('../model/userModel.js')


// Protected Routes token base
 const requireSignIn = async(req, res, next)=>{
    try{
        const decode  = JWT.verify(req.headers.authorization, process.env.Secret_Key)
        req.user = decode
        next()
    }catch(error){
       console.log(error);
    }
}

//  admin access
 const isAdmin = async(req, res, next)=>{
   try{
     const user = await userModel.findById(req.user._id)
     if(user.role !== 1){
       return res.status(401).send({
        success: false,
        message: "Unauthorized access"
       }) 
     }
     else{
        next()
     }
   }
   catch(error){
    console.log(error)
    return res.status(401).send({
        success: false,
        error,
        message: "Errror in admin middleware"
       }) 
   }
}

// user middleware
 const userMiddleware = (req, res, next) => {
  if (req.user.role !== "user") {
    return res.status(400).json({ message: "User access denied" });
  }
  next();
};
module.exports = {
    userMiddleware, isAdmin, requireSignIn
}