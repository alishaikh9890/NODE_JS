
const subCategory = require("../models/subCategory.schema")

const sub_create = async (req, res) =>{
    try {
          const data = await subCategory.create(req.body);
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
}

const getSub = async (req, res) =>{
    let data = await subCategory.find().populate("extraId");
    res.send(data)
}

const subUpdate = async(req,res) =>{
    let {id} = req.params;
    let data = await subCategory.findById(id);
    data.extraId = req.body.extraId;
    data.save();
    res.send(data);
}

module.exports = {sub_create, getSub, subUpdate}