const express = require("express");
const connection = require("./db");
const product = require("./product");
const app = express();
app.use(express.json())

app.get("/", async(req, res)=>{
    let data = await product.find();
    res.status(200).send(data)
})

app.post("/", async(req, res)=>{
    let data = await product.create(req.body)
    res.status(201).send(data)
})

app.patch("/:id", async(req, res)=>{
    let {id} = req.params;
    let data = await product.findByIdAndUpdate(id, req.body);
    res.send(data)
})

app.delete("/:id", async(req, res)=>{
    let {id} = req.params;
     await product.findByIdAndDelete(id);
     let data = await product.find()
    res.send(data)
})

app.listen(8090, () => {
    console.log("running on port 8090");
    connection();
})