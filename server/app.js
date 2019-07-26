var express = require('express');

var creditCardController = require('./creditCardConteroller');
var firebase = require('firebase')

const app = express();

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
    res.setHeader("Access-Control-Allow-Methods","GET,POST, PATCH, PUT, DELETE, OPTIONS");
    next();

});

var config = {
    apiKey: "AIzaSyDYiYRMlAZpEXya9aVUhv9cpJwJL4Oz7gM",
    authDomain: "dazzling-torch-8270.firebaseapp.com",
    databaseURL: "https://dazzling-torch-8270.firebaseio.com",
    projectId: "dazzling-torch-8270",
    storageBucket: "dazzling-torch-8270.appspot.com",
    messagingSenderId: "935228019520"
  };
  firebase.initializeApp(config);

  console.log('firebase connected...');

var port = process.env.PORT || 3000;

app.use('/assets',express.static(__dirname + '/public'));

creditCardController(app);

app.listen(port);

