const {Router} = require("express");
const { data, createData, deleteData, updateData, addProduct } = require("../controllers/Product.controller");

const P_router = Router();

P_router.get("/products",data)

P_router.post("/create",createData)

P_router.delete("/delete/:id", deleteData)

P_router.patch("/update/:id", updateData);

P_router.get("/", addProduct)

module.exports = P_router;  
