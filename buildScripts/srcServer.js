 var express = require("express");
 var path = require("path");
 var open = require("open");


// >> ES5 Version
//  var port = 3000;
//  var app = express();

 const port = 3000;
 const app = express();

 app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname, '../src/index.html'));
 });

 // Listen to the port defined above
 app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
 })
