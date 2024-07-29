
const {Router} = require("express");
const{ Home, signup} = require("../controllers/user.controller");
const valid = require("../middlewares/user.middleware");

const router = Router();

router.get("/",Home)

router.post("/signup", valid, signup);

router.patch("/update/:id"); 

module.exports ={router};