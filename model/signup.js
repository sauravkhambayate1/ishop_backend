const mongoose=require('mongoose');

const signUpStructure=mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    mobile:Number
})

const signupModal=mongoose.model("sign",signUpStructure)
module.exports=signupModal;