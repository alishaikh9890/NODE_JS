const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    title:String,
    price:Number,
    description:String,
    img: String,
    subcategoryId:{type:mongoose.Schema.Types.ObjectId,ref:"subCategory"},
    extraId:{type:mongoose.Schema.Types.ObjectId,ref:"extracategory"},
    categoryId:{type:mongoose.Schema.Types.ObjectId,ref:"category"}

})

const Product = mongoose.model("product", productSchema);

module.exports = Product;