const mongoose = require("mongoose");

const connection = async() =>{
    await mongoose.connect("mongodb+srv://rwbn1alishanas:api@cluster0.k68fn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("connected to the mongodb")
}

module.exports = connection;