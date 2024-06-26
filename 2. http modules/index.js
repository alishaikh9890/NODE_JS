const http = require('http');

const port = 9000;
const fs = require('fs');
const requestHandler = (req, res) => {
   let fileName = "";
   switch(req.url)
   {
    case '/':
        fileName = "./index.html";
    break;

    case '/home':
        fileName = "./home.html";
    break;

    case '/about':
        fileName = "./about.html";
    break;
   }

   fs.readFile(fileName, (err, result) => {
    if(!err){
        res.end(result)
    }
   })
}

const server = http.createServer(requestHandler);

server.listen(port,(err) => {
    if(err) {
        console.log("server is not start on port");
        return false;
    }
    console.log("Server is start on post :- " + port);
})