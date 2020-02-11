var express = require('express');
// controller
var testController = require('./controller/TestController');
var app = express();
testController(app);
app.listen(3000);


