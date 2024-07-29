const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    username : String,
    password : String,
    email : String,
    number : Number
})

const user  = mongoose.model("user", userSchema);


module.exports = user;