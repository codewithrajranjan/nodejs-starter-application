var express = require("express");
var config = require("./config.js");

const SERVER_PORT = config.serverPort

var app = express();

app.use(express.static('public'));

//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));

var server = app.listen(SERVER_PORT, function(){

    console.log("Server started at http://localhost:%s", SERVER_PORT);

});