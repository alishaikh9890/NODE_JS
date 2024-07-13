const express = require("express");
const {router} = require("./routes/routes")

const app = express();

app.use(router)



app.listen(8090, ()=>{
    console.log("server is running on port 8090")
})