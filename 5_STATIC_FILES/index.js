const express = require('express');

const port = 9000;

const app = express();

const path = require("path");

app.set("view engine", "ejs");

app.use("/", express.static(path.join(__dirname, "/public")))

app.get("/", (req, res) =>{
    return res.render("index");
})

app.get("/form", (req,res) => {
    return res.render("form")
})


app.listen(port, (err) => {
    if(err){
        console.log("server is not connected");
        return false
    }
    console.log("server is connected to Port :- ", port)
})