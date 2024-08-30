const Product = require("../models/Product.schema")

const data = async (req, res) => {
    let P_data = await Product.find()
    res.send(P_data)
}

const createData = async (req, res) =>{
   let data = await Product.create(req.body);
   res.send(data)
}

const deleteData = async (req, res) =>{
    res.send(req.params)
//    let data = await Product.findByIdAndDelete(req.body.id);
//    res.send("deleted successfull")
}

module.exports = {data, createData, deleteData} 