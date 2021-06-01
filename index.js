const express = require('express');
const path = require('path');

var app = express();

var app = express();
app.use('/', express.static(path.join(__dirname)))

// listen to port
app.listen(process.env.PORT || 13001);
console.log(`You are listening to port ${process.env.PORT || 13001}`);