var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var clients =  0;
var start = 0;
var sdata = {
    x:5,
    y:5,
    mx:0,
    my:0,
    
};


app.get('/', function(req, res){
  res.sendfile('index.html');
});

//Whenever someone connects this gets executed
io.on('connection', function(socket){
    if(start == 0){
        sync(socket);
        start++;
        console.log("sync start");
    }
     clients++;
     var clientIp = socket.request.connection.remoteAddress;

     console.log(clientIp);
     console.log('A user connected');
     socket.emit('player',{ player: clients});
     socket.broadcast.emit('newclientconnect',{ data:clients});
     socket.emit('newclientconnect',{ data:clients});
     io.sockets.emit('create',{clients});
  
  socket.on('disconnect', function () {
      clients--;
      socket.emit('broadcast',{ description: clients + ' clients connected!'});
    console.log('A user disconnected');
  });
  socket.on('msg', function (data) {
   // console.log(data);
   sdata.x = data.x;
   sdata.y = data.y;
   sdata.mx = data.mx;
   sdata.my = data.my;
  });
});
function sync(socket){
        
        setTimeout(function () {
         //   console.log("sync");
         socket.broadcast.emit('loc',{ x:sdata.x,y:sdata.y,mx:sdata.mx,my:sdata.my});   
         sync(socket);
         
        },500);
}
http.listen(8080, function(){
  console.log('listening on *:8080');
  
});
