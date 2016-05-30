var http = require("http");
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(express.static(__dirname + "/wwwroot"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.send("<html><body><h1>Express</h1><div><img src='/images/logos/52709.png' alt='FCK' /></div></body></html>");
})

//demos
// var eventhandlers = require("./demos/eventhandlers.js");
// eventhandlers.demo();

// var buffers  = require("./demos/buffers.js");
// buffers.demo();

// var streams  = require("./demos/streams.js");
// streams.demo();

var files  = require("./demos/files.js");
files.demo();

//demos end

var controllers = require("./controllers/index.js");
controllers.init(app);

var server = http.createServer(app);
server.listen(3000);

console.log("Server is up and running!");
