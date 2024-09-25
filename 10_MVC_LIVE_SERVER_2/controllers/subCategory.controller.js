const { assign } = require("nodemailer/lib/shared");
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
    let data = await subCategory.find();
    res.send(data)
}

module.exports = {sub_create, getSub}