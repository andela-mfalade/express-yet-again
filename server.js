'use strict';

var express = require('express'),
    fs = require('fs'),
    app = express(),
    port = 8080;

app.get('/', function (req, res) {
    res.send('Hello, how are you??');
});

app.listen(port, function () {
    return console.log("listening on port: ", port);
});
