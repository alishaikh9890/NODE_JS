const express = require("express");

const port = 9000;

const app = express();


app.set("view engine", "ejs");

const checkpost = (req, res, next) => {
    if(req.query.age >= 18){
        return next();
    }
    return res.redirect("/");
}

app.get("/", (req, res) => {
    return res.render("index");
})

app.get("/home", checkpost, (req, res) => {
    return res.render("home")
})

app.get("/contact",checkpost, (req, res) => {
    return res.render("contact");
})

app.get("/404", (req, res) => {
    return res.render("")
})

app.use(checkpost);

app.listen(port, (err) => {
    if(err) {
        console.log("server is not start");
        return false;
    }
    console.log("server is start on port : "+ port);
})