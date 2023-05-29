const express=require('express')
const route=express();
const signController=require('../controller/signIn');
route.post('/signup',signController.signUpController);
route.post('/signin',signController.signinController);
route.get('/signin',signController.loginController);
module.exports=route;