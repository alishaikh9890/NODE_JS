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
    let editid = req.body.editid;
   const {name, email, password, gender, hobby, phone, city} = req.body;

   if(editid){
    adminTbl.findByIdAndUpdate(editid, {
        name : name,
        email : email,
        password : password,
        gender : gender,
        hobby : hobby,
        phone : phone,
        city : city
    }).then((success) => {
        console.log("Record successfully Edited !");
        return res.redirect("/")
    }).catch((err)=>{
        console.log(err);
        return false;
    })

   }else{

   adminTbl.create({
    name : name,
    email : email,
    password : password,
    gender : gender,
    hobby : hobby,
    phone : phone,
    city : city,
   }).then((data) => {
    console.log("record successfully insert")
    return res.redirect("/");

   }).catch((err) => {
    console.log(err);
    return false;
   })

   }

})

app.get("/deleteData/:id", (req, res)=>{
    adminTbl.findByIdAndDelete(req.params.id)
    .then((data)=>{
        return res.redirect("/")
    }).catch((err)=>{
        console.log(err);
        return false;
    })
})

app.get("/editData" , (req, res)=>{
    let id = req.query.id;
    adminTbl.findById(id).then((single) => {
        return res.render("edit", {
            single
        })
    }).catch((err) =>{
        console.log(err);
        return false;
    })
})


// app.post("/updateData", (req, res)=>{
//  let id = req.body.editid;
//  const {name, email, password, gender, hobby, phone, city} = req.body;
//     adminTbl.findByIdAndUpdate(id, {
//         name : name,
//         email : email,
//         password : password,
//         gender : gender,
//         hobby : hobby,
//         phone : phone,
//         city : city
//     }).then((success) => {
//         console.log("Record successfully Edited !");
//         return res.redirect("/")
//     }).catch((err)=>{
//         console.log(err);
//         return false;
//     })
// })


app.listen(port, (err) =>{
    if(err){
        console.log("server is not connected")
        return false
    }
    console.log("server is connected to port :- " + port )
})