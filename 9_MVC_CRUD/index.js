const express = require("express");

const port = 9000;

const app = express();

const db = require("./config/database")

app.set("view engine", "ejs")

app.listen(port, (err)=>{
    if(err){
        console.log("Server is not connecte");
        return false;
    }
    console.log("server is connectet ot :- " + port)
})