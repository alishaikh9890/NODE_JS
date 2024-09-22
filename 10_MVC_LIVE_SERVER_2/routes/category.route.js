const {Router} = require("express");
const { create } = require("../controllers/category.controller");

const catRouter = Router();

catRouter.post("/create", create)

module.exports = catRouter;