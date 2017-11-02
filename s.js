
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 8080;
var linkifyElement = require('linkifyjs/element');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/chat.html');
});

app.get('/ballon.wav', function(req, res){
  res.sendFile(__dirname + '/ballon.wav');
});

app.get('/ding.wav', function(req, res){
  res.sendFile(__dirname + '/ding.wav');
});

app.get('/error.wav', function(req, res){
  res.sendFile(__dirname + '/error.wav');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  
});


http.listen(port, function(){
  console.log('listening on *:' + port);
});