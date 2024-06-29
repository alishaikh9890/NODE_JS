const express = require("express");

const port = 9000;

const app = express();


app.set("view engine", "ejs");

const middleware = (req, res, next) => {
    console.log("hello");
    next();
}

app.get("/", (req, res) => {
    return res.render("index");
})

app.get("/home", (req, res) => {
    return res.render("home")
})

app.get("/contact", (req, res) => {
    return res.render("contact");
})

app.get("/404", (req, res) => {
    return res.render("")
})

app.use(middleware);

app.listen(port, (err) => {
    if(err) {
        console.log("server is not start");
        return false;
    }
    console.log("server is start on port : "+ port);
})