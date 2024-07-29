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

const update = async(req, res) => {
  let {id} = req.params;
   await user.findByIdAndUpdate(id, req.body);
   res.send("updated")
}

const remove = async(req, res) => {
  let {id} = req.params;
  try{
     await user.findByIdAndDelete(id);
  res.send("deleted")
  }
  catch(error) {
    res.send("err", error)
  }
}

module.exports = {Home, signup, update, remove};