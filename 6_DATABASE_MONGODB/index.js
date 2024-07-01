const express = require("express");

const port = 9000;

const app = express();

const database = require("./config/database");


app.listen(port, (err) => {
    if(err){
        console.log("server is not connected");
        return false
    }
    console.log("server is connected to port : - " + port)
})