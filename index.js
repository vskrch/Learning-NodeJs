const http = require('http');
const server = http.createServer((req,res)=>{
//request is an event listenener whihc is registereg so event loop keeps always running 
console.log(req);
// to break the event looop in node js we use 
//process.exit();
});

server.listen(3030);