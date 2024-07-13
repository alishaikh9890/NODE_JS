const Home = (req, res)=>{
    res.send("controllers")
}

const signup = (req, res)=>{
    console.log(req.body);
    res.send("done")
}
module.exports ={ Home, signup}