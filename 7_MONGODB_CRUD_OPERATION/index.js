const express = require("express");

const port = 9000;

const path = require("path")

const fs = require("fs");

const app = express();

const database = require("./config/database")

const adminTbl = require("./models/adminTbl");

app.set("view engine", "ejs");

app.use(express.urlencoded()); // middleware

app.use("/uploads", express.static(path.join(__dirname, "uploads")))

const multer = require("multer");

// file upload start

const fileupload = multer.diskStorage({
    destination : (req, res, cb) => {
        cb(null, "uploads/")
    },
    filename : (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const ImageUpload = multer({storage : fileupload}).single("image");

// file upload end

 
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

app.post("/insertData", ImageUpload, (req, res) => {
    let editid = req.body.editid;
   const {name, email, password, gender, hobby, phone, city} = req.body;

   if(editid){

    if(req.file){
        adminTbl.findById(editid).then((oldimage) => {
            fs.unlinkSync(oldimage.image);
            let image = req.file.path;
            adminTbl.findByIdAndUpdate(editid, {
                name : name,
                email : email,
                password : password,
                gender : gender,
                hobby : hobby,
                phone : phone,
                city : city,
                image : image
            }).then((success) => {
                console.log("Record successfully Edited !");
                return res.redirect("/")
            }).catch((err)=>{
                console.log(err);
                return false;
            })
        }).catch((err)=>{
            console.log(err);
            return false;
        })
    }
    else{
       adminTbl.findById(editid).then((oldRecord)=>{
        adminTbl.findByIdAndUpdate(editid, {
            name : name,
            email : email,
            password : password,
            gender : gender,
            hobby : hobby,
            phone : phone,
            city : city,
            image : oldRecord.image
        }).then((success) => {
            console.log("Record successfully Edited !");
            return res.redirect("/")
        }).catch((err)=>{
            console.log(err);
            return false;
        })
       }).catch((err)=>{
        if(err){
            console.log(err);
            return false;
        }
       })
    }


    

   }else{

    let image =""
    if(req.file){
        image = req.file.path
    }

   adminTbl.create({
    name : name,
    email : email,
    password : password,
    gender : gender,
    hobby : hobby,
    phone : phone,
    city : city,
    image : image
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

   let id = req.params.id

    adminTbl.findById(id).then((singlerecord)=>{
        fs.unlinkSync(singlerecord.image)
    }).catch((err)=>{
        console.log(err);
        return false;
    })

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