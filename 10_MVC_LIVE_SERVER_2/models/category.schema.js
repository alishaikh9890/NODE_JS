const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    name : String,
    subcategoryId:{type:mongoose.Schema.Types.ObjectId,ref:"subCategory"} 
})

const category = mongoose.model("category", CategorySchema);

module.exports = category;