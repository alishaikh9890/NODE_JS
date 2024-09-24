const {Router} = require("express");
const { sub_create } = require("../controllers/subCategory.controller");

const subCat = Router();

subCat.post("/create",sub_create)


module.exports = subCat;