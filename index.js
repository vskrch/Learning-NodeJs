const http = require('http');
const server = http.createServer((req,res)=>{

const url = req.url;
if(url == '/'){
  res.write('<html>');
    res.write('<head> <title> Node app</title></head>');
      res.write('<body> ');
        res.write('<h1> New app</h1>');
res.setHeader('Content-type','text/html');
console.log(res);

 res.end();

}


 
});

// server.listen(3030); // obsolete in repl 