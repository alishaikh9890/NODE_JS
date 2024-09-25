const {Router} = require("express");
const { create, update, getCategory } = require("../controllers/category.controller");

const catRouter = Router();

catRouter.post("/create", create)

catRouter.patch("/update/:id",update)

catRouter.get("/category",getCategory)

module.exports = catRouter;