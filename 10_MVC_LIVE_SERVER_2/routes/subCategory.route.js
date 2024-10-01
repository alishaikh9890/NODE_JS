const {Router} = require("express");
const { sub_create, getSub, subUpdate } = require("../controllers/subCategory.controller");

const subCat = Router();

subCat.post("/create",sub_create)

subCat.get("/getSub", getSub);

subCat.patch("/update/:id", subUpdate)

module.exports = subCat;