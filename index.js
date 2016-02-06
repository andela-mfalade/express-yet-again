var express = require('express'),
    port = 3000,
    fs = require('fs'),
    app = express(),
    fileContent = 0,
    names = [];


fs.readFile('sample.json', {encoding: 'utf-8'}, function(error, data) {
    if (error) {
        console.log(error, "An error occurred.");
    } else {
        fileContent = JSON.parse(data);
    }
});

fs.readFile('random-names.txt', {encoding: 'utf8'}, function (err, data) {
    if(err) { throw err }
    else {
        names = data.split('\n');
    }
});


app.get('/', function (req, res) {
    res.send(fileContent)
});


app.get('/users/:username', function (req, res) {
    res.send("Hello " + req.params.username);
})


app.get('/users', function (req, res) {
    var buffer = '';
    names.forEach(function (name) {
        buffer += '<a href="/users/' + name + '">' + name + '</a><br />';
    });
    res.send(buffer);
});

var server = app.listen(port, function () {
    console.log(server.address().port, " is where the magic happens!");
});
