var express = require('express');
var GCM = require('gcm').GCM;
var app = express();

var apiKey = 'AIzaSyCsCOzXB8Ewo2XcM1_YTUkFTnmIPNKD95s';
var browserkey = 'AIzaSyDvwFkA_xb0BFz_YOZT9WDj8y0NhJDvqfE';
var chromeNotify = 'AIzaSyCr6HK2w5J2E-pPkmvSxrfPRiHzkq1ceTM';
//var push_notifications =  "AIzaSyCMUUG0s9cTDM6IBnG7PTyyLDqPFsXX3mc";
var android = "AIzaSyCVtT9vPo6hSHgtAAQCvxk8ymBHxKZTQPk";

var gcm = new GCM(browserkey);

var register_device_id = 'fwQavAfCdE0:APA91bGGrn18oimAZ-WVciNpHsETM8vmmQuiy3KxH5cA0kEenXNS-TzyYnQqyakuEvddXf0KOcZdnBTzttBwcarLU1MBOkbuC5tbpueLnLUJxnVWnDRDqD_mT4fJmfbG4GZjhPFkMoai';
//var register_device_id = "cL7MtQTNlWc:APA91bFRomgpuiDMPHAIP6XDk4l0bBWV9zhJQWLbSlbiB86RugTr_zufTXbgPQUboUCLukGReN3Fx6gRn_swbPEDTXn5_uLNXPF5PeVlTCQsSXMrLxCIb_QN2ihUzbWHi3QZzFjaInKN";

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/gcm/api', function (req, res) {

  var msg = {
    registration_id: register_device_id, // required
    collapse_key: 'Collapse key',
    'data.key1': 'value1',
    'data.key2': 'value2'
  };

  var msg2 = {
    "data": {
      'message': "yahooooooooooooo",
      "title": "Portugal vs. Denmark",
      "text": "5 to 1"
    },
    "to": register_device_id
  };

  var msg3 = {
    "collapse_key": "score_update",
    "time_to_live": 108,
    "delay_while_idle": true,
    "data": {
      "score": "4x8",
      "time": "15:16.2342"
    },
    "to": register_device_id
  };

  var msg4 = {
    "collapse_key": "score_update",
    "time_to_live": 108,
    "delay_while_idle": true,
    "data": {
      "message": "This is a GCM Topic Message!",
    },
    "to": register_device_id
  };
  
  var msg5 = {
    "data": {
      "title": "this is my Titleeeeeeeeeeeeeeeeeeeeeeee",
      "message": "This is a GCM Topic Message!",
    }, 
    "to": register_device_id
  };

  gcm.send(msg5, function (err, messageId) {
    if (err) {
      console.log("Message : Something has gone wrong!", err);
      res.send("Message : Something has gone wrong! " + err);
    } else {
      console.log("Message: Sent with message ID: ", messageId);
      res.send("Message: Sent with message ID: " + messageId);
    }
  });

  //  gcm.send(message2, function(err, messageId){
  //     if (err) {
  //         console.log("Message2 : Something has gone wrong!", err);
  //         res.send("Message2 : Something has gone wrong! "+ err);
  //     } else {
  //         console.log("Message2 : Sent with message ID: ", messageId);
  //         res.send("Message2 : Sent with message ID: " + messageId);
  //     }
  //   });


}); //'/gcm/api'

var port = 3002;

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});