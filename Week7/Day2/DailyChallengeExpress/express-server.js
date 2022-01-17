const express = require('express'),
    app = express(),
    bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.listen(3000, () => console.log('Server is listening on a port 3000'));

app.all('*', (error, req,res, next)=>{
    throw new appError('212', 123);
    res.send('404');
    const {status = 404, message ='Something wrong'} = err;
    res.send(status + " " + message);
})
module.exports = app;
