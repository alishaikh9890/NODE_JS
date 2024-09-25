const {Router} = require("express");
const { sub_create, getSub } = require("../controllers/subCategory.controller");

const subCat = Router();

subCat.post("/create",sub_create)

subCat.get("/get", getSub)

module.exports = subCat;