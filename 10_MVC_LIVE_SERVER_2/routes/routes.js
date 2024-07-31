
const {Router} = require("express");
const{ Home, signup, update, remove, ui, getsignup, login} = require("../controllers/user.controller");
const {valid, isAuth} = require("../middlewares/user.middleware");

const router = Router();

router.get("/user",isAuth,Home)

router.post("/signup", valid, signup);

router.patch("/update/:id", update); 

router.delete("/remove/:id", remove)

router.get("/", ui)

router.get("/signup",getsignup)

router.post("/login", login)

module.exports ={router};