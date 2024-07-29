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


module.exports = valid