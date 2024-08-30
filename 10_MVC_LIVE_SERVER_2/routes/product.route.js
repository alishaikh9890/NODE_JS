const {Router} = require("express");
const { data, createData } = require("../controllers/Product.controller");

const P_router = Router();

P_router.get("/",data)

P_router.post("/create",createData)

module.exports = P_router;