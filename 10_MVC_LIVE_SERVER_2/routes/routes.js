const {Router} = require("express");
const{ Home, signup, update, remove, ui, getsignup, login, Local, LoginPage, profile, logout, forget, resent, resetPage} = require("../controllers/user.controller");
const {valid, isAuth} = require("../middlewares/user.middleware");
const Auth = require("../middlewares/isAuth");
const passport = require("passport");

const router = Router();

// router.get("/user",isAuth,Home)
  
router.get("/user",Home)

router.post("/signup", valid, signup);

router.patch("/update/:id", update); 

router.delete("/remove/:id", remove) 

router.get("/", ui)

router.get("/signup",getsignup)

router.post("/login", login)

router.post("/local",passport.authenticate("local",{successRedirect: "/user", failureRedirect:"/user/login"}), Local)

router.get("/login", LoginPage);

router.get("/profile",Auth, profile)

router.get("/logout", logout)

router.patch("/forget/:id", forget)

router.post("/password", Auth, resent);

router.get("/reset",Auth, resetPage)

module.exports ={router};