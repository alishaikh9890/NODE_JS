const http = require('http');

const port = 9000;
const fs = requie('')
const requestHandler = (req, res) => {
   console.log(req.url)
}

const server = http.createServer(requestHandler);

server.listen(port,(err) => {
    if(err) {
        console.log("server is not start on port");
        return false;
    }
    console.log("Server is start on post :- " + port);
})