const express=require('express')
const route=express();
const homeController=require('../controller/home1');
const phoneController=require('../controller/mobile1')
const padController=require('../controller/ipad1')
const lapController=require('../controller/mackbook1');
const accessController=require('../controller/accessories1')
const order = require('../payment/payment')
// const order=require('../payment/payment')
route.get("/home",homeController.getHomeDetailsController);
// route.get("/home/:id",homeController.getHomeDetailsByIdController);
// route.get("/homecaro",homeController.homecaro);
// route.get("/futurecaro",homeController.futurecaro)
route.get("/phone",phoneController.getMobileDetailsController);
// route.get("/phone/:id",phoneController.getMobileDetailsByIdController);
// route.get("/phonecarosal",phoneController.carosalPhone);
route.get("/ipad",padController.getIpadDetailsController)
// route.get("/ipad/:id",padController.getIpadDetailsByIdController)
// route.get("/padcarosal",padController.caroPad)
route.get("/laptop",lapController.getMacbookDetailsController)
// route.get("/laptop/:id",lapController.getMacbookDetailsByIdController)
// route.get("/lapcaro",lapController.lapcaro)
route.get("/accessories",accessController.getAccesoriesDetailsController)
// route.get("/accessories/:id", accessController.getAccesoriesDetailsByIdController)
// route.get("/acccaro",accessController.caro)
// route.post('/create/order',order.createOrder)
// route.post("/api/payment/verify",order.orderVerify)
route.post('/create/order',order.createOrder)
route.post("/api/payment/verify",order.orderVerify)

module.exports = route;