const express = require("express");
// const router = require("./routes/routes");

const port = 9000;

const app = express();

app.set("view engine", "ejs");

// app.use(route)

app.use(express.urlencoded());

app.get("/", (req, res)=>{
    return res.render("./index")
})


app.listen(port, (err)=>{
    if(err){
        console.log("sever is not connected");
        return false;
    }
    console.log("server is running on ", port);
})