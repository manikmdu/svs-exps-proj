var express = require('express');
var app = express();

app.get('/', function(req, res) {
  console.log("GET INVOKED");

  res.send({
    "Output": "Hello World!"
  });
});

app.post('/', function(req, res) {
  console.log("POST INVOKED");
  res.send({
    "Output": "Hello World!",
  });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
