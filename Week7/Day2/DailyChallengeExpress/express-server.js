const express = require('express'),
      app = express(),
      bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.listen(3000, () => console.log('Server is listening on a port 3000'));

module.exports = app;
