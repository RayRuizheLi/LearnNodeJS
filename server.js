
//Tutorial: https://openclassrooms.com/en/courses/2504541-ultra-fast-applications-using-node-js/2504972-creating-your-first-app-with-node-js
//Using Node.js to send html sample.

/*
var http = require('http');

var server = http.createServer(function(req, res) {

res.writeHead(200,{"Content-Type": "text/html"});
res.write('<!DOCTYPE html>'+
'<html>'+
' <head>'+
' <meta charset="utf-8" />'+
' <title>Sample Node.js sending HTML</title>'+
' </head>'+
' <body>'+
' <p>Learning <strong>Node.js</strong>!</p>'+
' </body>'+
'</html>');
res.end();
});

server.listen(8080);
*/

//load different pages for different urls
/*
var http = require('http');
var url = require("url");

var server = http.createServer(function(req, res) {
var page = url.parse(req.url).pathname;
console.log(page);
res.writeHead(200,{"Content-Type": "text/plain"});
if (page == '/') {
  res.write('You\'re at the yoyo store. What type of yoyo would you like to buy?');
}
else if (page == '/1A') {
  res.write('We have the best freestyle yoyo in town. Take your pick!');
}
else if (page == '/2A') {
  res.write('Buy one get one free! Limited sale for two hand play style.');
}
else if (page == '/3A') {
  res.write('We are currently out of stock. Please visit 1A for similar products.');
}
else if (page == '/4A') {
  res.write('Off string yoyos for both professionals and beginners.');
}
else if (page == '/5A') {
  res.write('5A freehand yoyos for sale. Special signed yoyo but Canadian 5A champion is available!.');
}
else {
  res.write('Welcome to Rays yoyo store! Visit 1A, 2A, 3A, 4A, or 5A!');
}

res.end();
});

server.listen(8080);
*/

//gathering info from paramaters in url
/*
var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res) {
  var params = querystring.parse(url.parse(req.url).query);
  res.writeHead(200,{"Content-Type": "text/plan"});
  if ('firstname' in params && 'lastname' in params) {
    res.write('Your name is ' + params['firstname'] + ' ' + params['lastname']);
  }
  else {
    res.write('You do have a first name and a last name, don\'t you?');
  }
res.end();
});

server.listen(8080);
*/

//Listening to events

/*
// The callback function is automatically added to the "request" event!
var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hi everybody!');
});
*/

/*
var http = require('http');
//same as the code above.
var server = http.createServer();
server.on('request', function(req, res) {
  res.writeHead(200);
  res.end('Hi everybody!');
});

server.on('close', function() {
  console.log('Goodbye!');
});

server.listen(8080);

server.close(); //triggers the close event
*/

//Emitting events

var EventEmitter = require('events').EventEmitter;

var game = new EventEmitter();

game.on('gameover', function(message){
  console.log(message);
});

game.emit('gameover', 'You lose!');
