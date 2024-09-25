const category = require("../models/category.schema")
 
 const create = async (req, res) =>{
    let cat = await category.create(req.body)
    res.send(cat)
 }

 const update = async (req, res) =>{
   let {id} = req.params;
   let cat = await category.findById(id);
   cat.subcategoryId = req.body.subId;
   cat.save()
   res.send(cat);
 } 

 const getCategory = async (req, res) =>{
   let data = await category.find();
   res.send(data);
 }

 module.exports = {create, update, getCategory}

