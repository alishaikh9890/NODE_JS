const express = require("express");

const port = 9000;

const app = express();

const db = require("./config/database")


app.set("view engine", "ejs");

app.use(express.urlencoded())

app.use("/", require("./routes")); 

app.listen(port, (err)=>{
    if(err){
        console.log("Server is not connecte");
        return false;
    }
    console.log("server is connectet ot :- " + port)
})