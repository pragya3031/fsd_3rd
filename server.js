const http = require ("http")
console.log("pra")
const server = http.createServer ((req, res) =>{
    res.write("this is the response from the server")
    res.end();

})
server.listen ((3000),()=>{
    console.log ("server is running");

})
