var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var url = require('url');
var util = require('util');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.listen((process.env.PORT || 3000));

// Server frontpage
app.get('/', function (req, res) {
    res.send('This is TestBot Server');
});

// Facebook Webhook
app.post('/webhook', function (req, res) {
        console.log("post-welcome!");
        var params = url.parse(req.url, true).query;
        console.log(params);
        if (params['hub.verify_token'] === 'testbot_verify_token') {
            res.send(params['hub.challenge']);
        } else {
             var entry = req.body.entry;
              console.log("entry--->"+JSON.stringify(entry));
            res.send('Invalid verify token');
        }
});
app.get('/webhook', function (req, res) {
        console.log("get-welcome!");
        var params = url.parse(req.url, true).query;
        console.log(params);
        if (params['hub.verify_token'] === 'testbot_verify_token') {
            res.send(params['hub.challenge']);
        } else {
         var entry = req.body.entry;
          console.log("entry--->"+JSON.stringify(entry));
           res.send('Invalid verify token');
        }
});