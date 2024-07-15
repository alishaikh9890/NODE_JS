const mongoose = require("mongoose");

const db = async () => {
    await mongoose.connect("mongodb+srv://rwbn1alishanas:node@cluster0.gj1pm61.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

    console.log("connected to db");
}

module.exports = db;