const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const IpadSchema = new Schema({
    id :  Number,
    category : String,
    name : String,
    ratting : String,
    image : String,
    price : String,
    oPrice : String,
    quantity : String
})

const Ipad = mongoose.model('ipadShop',IpadSchema)


// Accesories.create(...accesories).then(() => console.log("Added"))
module.exports = Ipad;