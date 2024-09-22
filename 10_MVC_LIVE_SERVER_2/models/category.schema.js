const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    name : String,
    
})

const category = mongoose.model("category", CategorySchema);

module.exports = category;