var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var userScores = [1, 2, 4, 10, 90, 20];

app.get('/scores', function(req, res, next) {
    res.json(userScores);
});

app.get('/bestScore', function(req, res, next) {
    Array.min = function(array) {
      return Math.min.apply(Math, array);
    };
    var bestScore = Array.min(userScores);
    res.json(bestScore)
});

app.post('/scores', jsonParser, function(req, res) {
    if (!req.body) {
        return res.sendStatus(400);
    }

    userScores.push(parseInt(req.body.score));
    res.status(201).json(userScores);
});

app.listen(process.env.PORT || 8081);
