const express = require("express");
const {router} = require("./routes/routes")
const db = require("./config/db")

const app = express();
app.use(express.json())
app.use(router)



app.listen(8090, ()=>{
    db()
    console.log("server is running on port 8090")
})