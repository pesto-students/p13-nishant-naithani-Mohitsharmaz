const http = require("http");

const PORT = process.env.PORT || 6000;

const server = http.createServer(async (req, res) => {
    console.log("request is", req, 'response is',res)
  if (req.url === "/api" && req.method === "GET") {
    res.writeHead(400);

    res.write("hi there, this is an vanialla node.js api");
    res.end();
  }

});

server.listen(PORT, ()=>{
  console.log("server started on port::", PORT)
})