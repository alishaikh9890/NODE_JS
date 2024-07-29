const express = require("express");

const port = 8000;

const app = express();

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    return res.render("index"); 
})

app.get("/home", (req, res) => {
    return res.render("home");
})

app.get("/contact", (req, res) =>{
    res.render("contact")
})

app.listen(port, (err) => {
    if(err){
        console.log("Sever is not connected");
        return false;
    }
    console.log("server is connected")
})
