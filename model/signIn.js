const mongoose=require('mongoose');

const signUpStructure=mongoose.Schema({
    email:String,
    password:String,
})

const signinModal=mongoose.model("sign",signUpStructure)
module.exports=signinModal;