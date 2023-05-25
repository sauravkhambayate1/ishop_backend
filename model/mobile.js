const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const MobileSchema = new Schema({
    id :  Number,
    category : String,
    name : String,
    ratting : String,
    image : String,
    price : String,
    oPrice : String,
    quantity : String
})

const mobile = mongoose.model('ipad',MobileSchema)



module.exports = mobile;