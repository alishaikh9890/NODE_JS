const {Router} = require("express");
const { add, get } = require("../controllers/extracategory.controler");

const extra = Router();

extra.post("/add", add);

extra.get("/get", get)

module.exports = extra;