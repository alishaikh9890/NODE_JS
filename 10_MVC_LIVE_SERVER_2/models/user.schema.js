const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    username : String,
    password : String,
    email : String,
    number : Number,
    role: String
})

const user  = mongoose.model("user", userSchema);


module.exports = user;