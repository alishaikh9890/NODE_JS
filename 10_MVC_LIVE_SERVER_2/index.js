const express = require("express");
const {router} = require("./routes/routes");
const port = 8050;
const db = require("./config/db");

const app = express();
app.use(express.json())
app.use(router);


app.get("/index", (req, res)=>{
    res.sendFile(__dirname+"/view/index.html");
})

app.listen(port, (err)=>{
    if(err){
        console.log("server is not running");
        return false;
    }
    db();
    console.log("server is running on port " , port)
})