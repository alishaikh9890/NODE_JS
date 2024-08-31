const {Router} = require("express");
const { data, createData, deleteData } = require("../controllers/Product.controller");

const P_router = Router();

P_router.get("/",data)

P_router.post("/create",createData)
<<<<<<< HEAD

P_router.get("/delete/:id", deleteData)
=======
>>>>>>> 0e9d2f3e4a04c9abf261acbcae53276e71011246

module.exports = P_router;