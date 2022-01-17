const http = require('http'); 
const server = http.createServer((req, res) => {  
    const user = {
        firstname: 'John',
        lastname: 'Doe'
    }
    if (req.url == '/welcome') { 
        res.setHeader("Content-Type", "application/json");

        res.writeHead(200);
        res.end(JSON.stringify({ message: "Welcome New User"}));
    
    } else {
         res.end(JSON.stringify(user))}
});
server.listen(5000);
console.log('Node.js web server at port 5000 is running..')