const crudTbl = require("../models/crudTbl");

const index = (req,res)=>{
    return res.render("add");
}

const addData = (req, res)=>{
    const {name, email, password, gender, hobby, city} = req.body;
    let image = "";
    if(req.file){
        image = req.file.path;
    }

    crudTbl.create({
        name : name,
        email : email,
        password : password,
        gender : gender,
        hobby : hobby,
        city : city,
        image : image,
    }).then((data) => {
        console.log("Records Added Successfully");
        return res.redirect("back")
    }).catch((err)=>{
        console.log(err);
        return false;
    })  
}

module.exports = {
    index,
    addData
}