var express = require('express');
 var app = express(),
log = require('simple-node-logger').createSimpleLogger(),
path = require("path"),
port = process.env.PORT || 4000;
var fs = require('fs');
var server = require('http').createServer(app);
var io = require('socket.io')(server);


app.get('/', function(req, res){
   res.sendfile(req + '');
});
app.post('/', function(req, res){
    console.log('POST /');
    
    console.log(req.headers);
    console.log(req);
    
    res.writeHead(200, {'Content-Type': 'application/x-www-form-urlencoded'});
    res.end('thanks');

});
app.use(express.static(__dirname));
app.listen(process.env.PORT);
io.on('connection', function(client){
  client.on('event', function(data){});
  client.on('disconnect', function(){});
});