var http = require("http");
var express = require("express");
var app = express();

// set the public static resource folder
app.use(express.static(__dirname + "/wwwroot"));

app.get("/", function (req, res) {
    res.send("<html><body><h1>Express</h1><div><img src='images/logos/52233.png' alt='FCK' /></div></body></html>");
})

var server = http.createServer(app);
server.listen(3000);