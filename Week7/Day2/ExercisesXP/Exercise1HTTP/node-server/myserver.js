const http = require('http'); 
const server = http.createServer((req, res) => {  

    if (req.url == '/welcome') { 
        res.setHeader("Content-Type", "application/json");

        res.writeHead(200);
        res.end(JSON.stringify({ message: "Welcome New User"}));
    
    } else {
         res.end('<h1>This is my first response</h1><br><h2>This is my second response</h2><br><h3>This is my third response</h3><br>');  
        
    }
});
server.listen(5000);
console.log('Node.js web server at port 5000 is running..')