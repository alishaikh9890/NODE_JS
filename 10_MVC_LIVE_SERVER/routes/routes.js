
const {Router} = require("express");
const {Home, signup} = require("../controllers/user.controller");

const router = Router();

router.get("/", Home);

router.post("/signup", signup)

module.exports = {router};  