const extracategory = require("../models/extracategory.schema")

const add = async (req, res) =>{
    let data = await extracategory.create(req.body);
    res.send(data)
}

const get = async(req, res) =>{
    let data = await extracategory.find();
    res.send(data);
}

module.exports= {add, get}