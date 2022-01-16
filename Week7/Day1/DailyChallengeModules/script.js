let {num, date} = require('./main');

const http = require('http');
const b = 5;

console.log(num);
console.log(num + b);

http.createServer(function (req, res) {
    res.writeHead(200);
    res.write(`My module is: \n ${num + b} \n Hi there ad the frontend \n`);
    res.write(`The date and time are currently : ${date}`);
    res.end();
}).listen(3000, ()=>console.log('server is listening on port 3000'));


