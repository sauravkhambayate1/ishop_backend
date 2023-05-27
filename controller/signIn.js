const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')
const signUpStructure=require('../model/signup')
//const signinStructure=require('../model/signin')

var login;
const signUpController=async(req,res)=>{
   const data=req.body;
   console.log(data);
 await bcrypt.hash(data.password,10,async (err,hash)=>{
    if(err){
        console.log(err);
    }else {
        
        const signDocument= new signUpStructure({
            firstName:data.firstName,
            lastName:data.lastName,
            email:data.email,
            password:hash,
            mobile:data.mobile
           })
           const result= await signDocument.save()
           console.log(result);
           res.send(result)
          
    } 
   })
}





const signinController=async(req,res)=>{
    var fetchpassword;
    var fetchuser;
    var fetchfirstName;
    const data=req.body;
   const querey={email:data.email}

   const fetchData=await signUpStructure.find(querey)
      fetchData.map((item)=>{
       fetchpassword=item.password;
       fetchuser=item.email;
       fetchfirstName=item.firstName;
    })
    if(data.email === fetchuser ){
        await bcrypt.compare(data.password,fetchpassword,(err,valid)=>{
            if(err){
                res.send("err")
            }
            else{
                console.log(valid);
                login=fetchfirstName;
                res.send("sucess")
            }
        })

    }
    else{
        login=false;
    }
  
}


const loginController=(req,res)=>{
    res.send(login)
    

}










module.exports={signUpController,signinController,loginController}