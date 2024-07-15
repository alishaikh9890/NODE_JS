const user = require("../models/user.schema")

const Home = (req, res)=>{
    res.send("controllers")
}

const signup = async (req, res)=>{

    let data = await user.create(req.body)
    res.send(data)
}
module.exports ={Home, signup}