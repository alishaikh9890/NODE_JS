const mongoose = require("mongoose");

productSchema = new mongoose.Schema({
    title:String,
    price:Number,
    image:String,
    category:String
})

const product = mongoose.model("product", productSchema);

module.exports = product;