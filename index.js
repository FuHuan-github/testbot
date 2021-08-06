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
      var entry = req.body.entry;
    console.log("entry--->"+JSON.stringify(entry));



//
//     var objArr= entry[0];
//     objArr.forEach(function(obj, index) {
//        Object.keys(obj).forEach(function(key){
//                console.log(key,obj[key]);
//
//         });
//     });



//    var events = entry[0].messaging
//    console.log("events--->"+events)
//
//      for (i = 0; i < events.length; i++) {
//          var event = events[i];
//          if (event.message && event.message.text) {
//              console.log("text--->"+event.message.text);
//          }
//      }
        var params = url.parse(req.url, true).query;
        console.log(params);
        if (params['hub.verify_token'] === 'testbot_verify_token') {
            res.send(params['hub.challenge']);
        } else {
            res.send('Invalid verify token');
        }
//    if (req.query['hub.verify_token'] === 'testbot_verify_token') {
//        res.send(req.query['hub.challenge']);
//    } else {
//        res.send('Invalid verify token');
//    }
});
app.get('/webhook', function (req, res) {
        console.log("get-welcome!");
//        console.log(req);

          var entry = req.body.entry;
          console.log("entry--->"+entry)
          console.log("entry[0]--->"+entry[0])


     var objArr= entry[0];
     objArr.forEach(function(obj, index) {
        Object.keys(obj).forEach(function(key){
                console.log(key,obj[key]);

         });
     });
          var events = entry[0].messaging
          console.log("events--->"+events)

            for (i = 0; i < events.length; i++) {
                var event = events[i];
                if (event.message && event.message.text) {
                    console.log("text--->"+event.message.text);
                }
            }

        var params = url.parse(req.url, true).query;
        console.log(params);
        if (params['hub.verify_token'] === 'testbot_verify_token') {
            res.send(params['hub.challenge']);
        } else {
            res.send('Invalid verify token');
        }
//    if (req.query['hub.verify_token'] === 'testbot_verify_token') {
//        res.send(req.query['hub.challenge']);
//    } else {
//        res.send('Invalid verify token');
//    }
});