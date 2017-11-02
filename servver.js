var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 8080;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/' + req + '.html');
}); 

io.on('connection', function(socket){
    console.log("dab");
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  
});
server.listen(port);