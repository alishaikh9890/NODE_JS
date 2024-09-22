const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema({
    name:String,
})

const subCategory = mongoose.model("subCategory", subCategorySchema);

module.exports = subCategory;