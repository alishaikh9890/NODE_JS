    const jwt = require("jsonwebtoken")
const tokenchecker = (req, res, next) =>{
    let {token} = req.cookies;
    let data = jwt.verify(token,"private-key")
    if(data.role == "admin"){
        next();
    }
    else {

        res.send("only admin can do this")
    }
}

module.exports = tokenchecker;