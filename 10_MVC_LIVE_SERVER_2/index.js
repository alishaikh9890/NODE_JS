const express = require("express");
const {router} = require("./routes/routes");
const port = 8050;
const db = require("./config/db");
const cookies = require("cookie-parser");
const session = require("express-session");

const app = express();
app.use(cookies());
app.use(session({secret:"private-key"}));
const passport = require("passport");
const LocalAuth = require("./middlewares/LocalAuth");
LocalAuth(passport)
app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", __dirname+"/view");
app.use(express.static(__dirname+"/public"))
app.use("/user",router);

app.listen(port, (err)=>{
    if(err){
        console.log("server is not running");
        return false;
    }
    db();
    console.log("server is running on port " , port)
})