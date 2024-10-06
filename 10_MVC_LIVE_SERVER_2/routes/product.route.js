const {Router} = require("express");
const { data, createData, deleteData, updateData, addProduct } = require("../controllers/Product.controller");
const tokenchecker = require("../middlewares/jwtmiddleware");

const P_router = Router();

P_router.get("/products",data)

P_router.post("/create", tokenchecker, createData)

P_router.delete("/delete/:id",tokenchecker, deleteData)

P_router.patch("/update/:id",tokenchecker, updateData);

P_router.get("/", addProduct)

module.exports = P_router;  
