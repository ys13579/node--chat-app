var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', function(req, res) {
	res.render('index');

});



server.listen(process.env.PORT || 3000);
console.log("server is running...");



io.on('connection', function(socket) {
	console.log("Socket is connected..");

	socket.username = "X";



socket.on('change_username', function(data){
	socket.username = data.username;
});

socket.on('new_message', function(data){
   io.sockets.emit('new_message', {message: data.message, username : socket.username});
	
});

});