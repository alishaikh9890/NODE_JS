const category = require("../models/category.schema")
 
 const create = async (req, res) =>{
    let cat = await category.create(req.body)
    res.send(cat)
 }

 module.exports = {create}

