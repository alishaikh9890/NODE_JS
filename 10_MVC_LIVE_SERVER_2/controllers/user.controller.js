const user = require("../models/user.schema");

const Home = async(req,res)=>{
  let data = await user.find();
  res.cookie("name", "user").send(data);
}

const signup = async(req, res)=>{
    console.log(req.body);
    let data = await user.create(req.body)
    res.cookie("logged", data.id).send(data);
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

const ui = (req, res) =>{
  console.log(req.cookies);
  res.render("index")
}

const getsignup = (req, res)=>{
  res.render("signup");
}

module.exports = {Home, signup, update, remove, ui, getsignup};