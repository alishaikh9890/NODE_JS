const mongoose = require("mongoose");

const extracategorySchema = new mongoose.Schema({
    name : String,
})

const extracategory = mongoose.model("extracategory", extracategorySchema);

module.exports = extracategory;