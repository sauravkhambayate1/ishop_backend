const mongo=require('mongoose')
const url="mongodb+srv://sauravkhambayate221:Saurav123@cluster0.d9nult5.mongodb.net/Bazaar"

const  connect=async()=>{
    try{
      await  mongo.connect(url)
      console.log("connected");


    }
    catch{
        console.log("error");

    }
}
module.exports=connect;