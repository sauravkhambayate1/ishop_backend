const dotenv=require('dotenv')
dotenv.config();
const express=require('express');
const bodyparser=require('body-parser');
const route=require('./router/routes');
// const sign=require('./router/sign')
const cors=require("cors")
const app=express();
const connect=require('./database/db')
const featuredproductsRouter = require('./router/routes');
app.use(bodyparser.json())
app.use(cors())
app.use(route)
app.use("/featuredproducts",featuredproductsRouter);
// app.use(sign)

app.listen(3001,()=>{
    connect()
    console.log("server running on port localhost:3001")
})