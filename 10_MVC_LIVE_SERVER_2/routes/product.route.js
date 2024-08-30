const {Router} = require("express");
const { data, createData, deleteData } = require("../controllers/Product.controller");

const P_router = Router();

P_router.get("/",data)

P_router.post("/create",createData)

P_router.get("/delete/:id", deleteData)

module.exports = P_router;