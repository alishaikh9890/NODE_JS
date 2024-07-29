const user = require("../models/user.schema");

const Home = async(req,res)=>{
  let data = await user.find();
  res.send(data)
}

const signup = async(req, res)=>{
    console.log(req.body);
    let data = await user.create(req.body)
    res.send(data);
}

module.exports = {Home, signup};