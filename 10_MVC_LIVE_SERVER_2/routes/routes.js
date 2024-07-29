
const {Router} = require("express");
const{ Home, signup, update, remove} = require("../controllers/user.controller");
const valid = require("../middlewares/user.middleware");

const router = Router();

router.get("/",Home)

router.post("/signup", valid, signup);

router.patch("/update/:id", update); 

router.delete("/remove/:id", remove)

module.exports ={router};