const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema({
    name:String,
    extraId:{type:mongoose.Schema.Types.ObjectId, ref:"extracategory"}
})

const subCategory = mongoose.model("subCategory", subCategorySchema);

module.exports = subCategory;