const express = require("express");

const port = 9000;

const app = express();

app.set("view engine", "ejs");

app.use("/", require("./routes"));

app.listen(port,(err)=> {
    if(err){
        console.log("server is not connected")
        return false
    }
    console.log("server is connected " + port)
})