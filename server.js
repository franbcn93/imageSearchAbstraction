'use strict';

//require packages
var express = require('express');
var app = express();
//load environment variables from .env file
//surpress warning if .env file missing with silent:true
require('dotenv').config({silent: true});
var bodyParser = require('body-parser');
var api = require('./api/search.js');
var routes = require('./routes/index.js');


//Configuration for bodyParser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/public', express.static(process.cwd() + '/public'));

var port = process.env.PORT || 8080;

var mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    
    console.log("We are connected!");
    
    api(app,db);
    //call api module with app and db as a parameter
    
    routes(app,db);
    //call routes module with app as a parameter
    
    app.listen(port,function(){
    //create server
    
        console.log('Node.js listening on port ' + port);
    
    
    });
    
}); //db.once



