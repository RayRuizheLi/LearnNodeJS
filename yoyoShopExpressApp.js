var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.setHeader('Content-Type', 'text/plan');
  res.end('You\'re at the yoyo store. What type of yoyo would you like to buy?');
});

app.get('/1A', function(req, res) {
  res.setHeader('Content-Type', 'text/plan');
  res.end('We have the best freestyle yoyo in town. Take your pick!');
});

app.get('/2A', function(req, res) {
  res.setHeader('Content-Type', 'text/plan');
  res.end('Buy one get one free! Limited sale for two hand play style.');
});

app.get('/3A', function(req, res) {
  res.setHeader('Content-Type', 'text/plan');
  res.end('We are currently out of stock. Please visit 1A for similar products.');
});

app.get('/4A', function(req, res) {
  res.setHeader('Content-Type', 'text/plan');
  res.end('Off string yoyos for both professionals and beginners.');
});

app.get('/5A', function(req, res) {
  res.setHeader('Content-Type', 'text/plan');
  res.end('5A freehand yoyos for sale. Special signed yoyo but Canadian 5A champion is available!.');
});

//manage 404
app.use(function(req, res, next){
  res.setHeader('Content-Type', 'text/plan');
  res.send(404, 'Page cannot be found!');
});

//Dynamic routes
app.get('/:yoyoNum/checkout', function(req, res){
  res.setHeader('Content-Type', 'text/plain');
  res.end('You have bought ' + req.params.yoyoNum);
});

app.listen(8080);
