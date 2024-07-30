const user = require("../models/user.schema");

const valid = (req, res, next) =>{
    let {username, password, email, number} = req.body;
    
    if(username&&password&& number && email) {
        return next()
    }
    else 
    {
        res.status(400).send("not valid data")
    }
}
   
const isAuth = async(req, res, next)=>{

    let{logged} = req.cookies;

    if(logged){
        let data = await user.findById(logged);
        console.log(data)
        next();
    }
    else{
        res.render("/user/signup")
    }
};

module.exports = {valid, isAuth}