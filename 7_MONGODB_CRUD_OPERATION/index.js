const express = require("express");

const port = 9000;

const app = express();

const database = require("./config/database")

const adminTbl = require("./models/adminTbl");

app.set("view engine", "ejs");

app.use(express.urlencoded()); // middleware

app.get("/", (req, res) => {
    adminTbl.find({}).then((allData)=> {
        return res.render("form", {
        record : allData
    })
    }).catch((err) =>{
            console.log(err);
            return false
    })
   
})

app.post("/inserData", (req, res) => {
   const {name, email, password, phone, city} = req.body;
   adminTbl.create({
    name : name,
    email : email,
    password : password,
    phone : phone,
    city : city
   }).then((data) => {
    console.log("record successfully insert")
    return res.redirect("/");

   }).catch((err) => {
    console.log(err);
    return false;
   })
})

app.get("/deleteData", (req, res)=>{
    adminTbl.findByIdAndDelete(req.query.id)
    .then((data)=>{
        return res.redirect("/")
    }).catch((err)=>{
        console.log(err);
        return false;
    })
})

app.listen(port, (err) =>{
    if(err){
        console.log("server is not connected")
        return false
    }
    console.log("server is connected to port :- " + port )
})