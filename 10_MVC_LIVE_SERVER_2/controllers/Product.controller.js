const Product = require("../models/Product.schema")

const data = async (req, res) => {
    let P_data = await Product.find()
    res.send(P_data)
}

const createData = async (req, res) =>{
   let data = await Product.create(req.body);
   req.flash("info","✅ Product Added Successfully")
   res.send(data)
}

const deleteData = async (req, res) =>{
    let {id} = req.params;
    let data = await Product.findByIdAndDelete(id);
    req.flash("info", " 🗑️ Product Deleted Successfully ")
    res.json({deleted:true, data})
}

const updateData = async (req, res) => {
    let {id} = req.params;
    let data = await Product.findByIdAndUpdate(id, req.body);
    req.flash("info", " ✏️ Product Updated Successfully ")
    res.send(data)
}

const addProduct = (req, res) => {
     return res.render("product", {info: req.flash("info")})
}

module.exports = {data, createData, deleteData, updateData, addProduct} 