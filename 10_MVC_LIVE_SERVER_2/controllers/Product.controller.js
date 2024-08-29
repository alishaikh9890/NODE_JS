const Product = require("../models/Product.schema")

const data = async (req, res) => {
    let P_data = await Product.find();
    res.send(P_data)
}


const createData = async (req, res) =>{
   let data = await Product.create(req.body);
   res.send(data)
}

module.exports = {data, createData}