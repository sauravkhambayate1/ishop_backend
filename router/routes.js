const express=require('express')
const route=express();
const homeController=require('../controller/home1');
const phoneController=require('../controller/mobile1')
const padController=require('../controller/ipad1')
const lapController=require('../controller/mackbook1');
const accessController=require('../controller/accessories1')
const order = require('../payment/payment');
const {isAdmin, requireSignIn}  = require('../middleware/authMiddleware')
const { registerController, loginController, testController,  } = require('../controller/authController');
const {getFeaturedProductsDetailsController} = require('../controller/featuredproducts');
// const order=require('../payment/payment')
route.get("/home",homeController.getHomeDetailsController);

route.get("/phone",phoneController.getMobileDetailsController);

route.get("/ipad",padController.getIpadDetailsController)

route.get("/laptop",lapController.getMacbookDetailsController)

route.get("/accessories",accessController.getAccesoriesDetailsController)

route.post('/create/order',order.createOrder)
route.post("/api/payment/verify",order.orderVerify)

route.post('/register', registerController)

// Login Route
route.post('/login', loginController)

// test Routes
route.get('/test',requireSignIn, isAdmin,  testController)

// featured Products


route.get('/', getFeaturedProductsDetailsController);
// route.get("/:id",getFeaturedProductsDetailsByIdController)

module.exports = route;