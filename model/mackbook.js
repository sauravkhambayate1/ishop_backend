const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const MackSchema = new Schema({
    id :  Number,
    category : String,
    name : String,
    ratting : String,
    image : String,
    price : String,
    oPrice : String,
    quantity : String
})

const mackBook = mongoose.model('macbooks',MackSchema)


// Accesories.create(...accesories).then(() => console.log("Added"))
module.exports = mackBook;