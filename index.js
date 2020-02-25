const http = require('http');
const fs= require('fs');
const server = http.createServer((req,res)=>{

    console.log(req.url,req.method,req.headers);
    res.setHeader('Content-type','text/html');
    const url = req.url;
    const method = req.method;
    if(url==='/'){
    res.write('<html>');
    res.write('<head><title> Node App</title></head>');
        res.write('<body> <form action ="/message" method="POST" name="message"><input type="text"><button type="submit">Send</button></form></body>');
    res.write('</html>');


    }
    if(url === '/message' && method === 'POST'){

        fs.writeFile('message.txt','usermessage');
        res.statusCode('302');
        res.setHeader('Location','/');
        return res.end();
    }
  


});
server.listen(3030);