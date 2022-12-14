var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.post('/', function(req, res){
    res.send("Hello world! post type");
 });
app.listen(3000);
