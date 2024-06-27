const express = require("express");

const port = 7000;

const app  = express();

app.use(express.urlencoded());

app.set("view engine", "ejs")

const studentData = [
    {
        userid : 11,
        name : "manthan",
        email : "manthan@gmail.com",
        password : "manthan@123",
        phone : "0123456789"
    },
    {
        userid : 12,
        name : "rajvi",
        email : "rajvi@gmail.com",
        password : "rajvi@123",
        phone : "1234567890"
    },
    {
        userid : 13,
        name : "muzammil",
        email : "muzammil@gmail.com",
        password : "muzammil@123",
        phone : "2345678901"
    },

]

app.get("/", (req, res) =>{
    return res.render("form" , {
        student : studentData
    })
})

app.post("/insertData", (req,res) => {
    
    let userid = req.body.userid;
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let phone = req.body.phone;

    const obj = {
        userid : userid,
        name : name,
        email : email,
        password : password,
        phone : phone
    }

    studentData.push(obj)
    return res.redirect('back');
})


app.get("/deleteData", (req, res) =>{
    let userId = req.query.userid;
    let ans = studentData.filter((item) => {
        return item.userid != userId;
    })
    studentData = ans;
    return res.redirect('back');
})

app.listen(port, (err) => {
    if(err){
        console.log("servers is not connected");
        return false;
    }
    console.log("server is connected on Port : "+port)
})