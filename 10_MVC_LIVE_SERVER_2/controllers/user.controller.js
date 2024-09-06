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

const login = async(req, res) =>{
  let {email, password} = req.body;

  let data = await user.findOne({email: email});

  if(!data){
    return res.send("Invalid Email Id");
  }
  if(data.password  != password){
    return res.send('wrong password')
  }
  console.log(data);
  return res.send("logged in")
}


// ---  passport js ---  //

const Local = (req, res) => {
  res.send("logged in by passport js");
}

const LoginPage = (req, res) => {
  res.render("login")
}

const profile = (req, res) =>{
  res.send(req.user)
}


const logout = (req, res) =>{
  req.logOut((err)=>{
    if(err){
      console.log(err)
    }
    res.send("logout")
  });
};


const forget = async(req, res) =>{
  let {id} = req.params;
  let {email, password, newPassword} = req.body;

  let data = await user.findOne({email : email});
  if(!data){
    return res.send("invalid Email Id")
  }
  if(data.password != password){
    return res.send("Wrong password")
  }

  let User = await user.findByIdAndUpdate(id, {password:newPassword})
  res.send(User)
}


const resent = async(req, res) => {

  let {password} = req.body;

  await user.findByIdAndUpdate(req.user.id, {password: password})
  res.send("updated password")

}


const resetPage = (req, res) => {
  res.render("password")
}

module.exports = {Home, signup, update, remove, ui, getsignup, login, Local, LoginPage, profile, logout, forget, resent, resetPage};