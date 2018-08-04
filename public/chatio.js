$(function(){

var socket = io.socket('http://localhost:3000');

var message = $(#message);
var username = $(#username);
var send_message = $(#send_message);
var send_username = $(#send_username);
var chat = $(#chat);


});


send_message.click(function(){
	io.sockets.emit('new_message', {message : message.val()})
});

io.sockets.on('new_message', function(data){
	message.val('');
	chat.append("<p class = 'message'>" + data.username + ":" + data.message +"</p>");
});

send_username.click(function(){
	io.sockets.emit('change_username', {username : username.val()})
});

