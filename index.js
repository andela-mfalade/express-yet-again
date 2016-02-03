var express = require('express'),
    port = 3000,
    fs = require('fs'),
    app = express(),
    fileContent = 0;


fs.readFile('sample.json', {encoding: 'utf-8'}, function(error, data) {
    if (error) {
        console.log(error, "An error occurred.");
    } else {
        fileContent = JSON.parse(data);
    }
});


app.get('/', function (req, res) {
    res.send(fileContent)
});


var server = app.listen(port, function () {
    console.log(server.address().port, " is where the magic happens!");
});
