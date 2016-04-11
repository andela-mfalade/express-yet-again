'use strict';

var express = require('express'),
    morgan = require('morgan'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    fs = require('fs'),
    app = express(),
    port = process.env.PORT || 5000,
    base = __dirname + '/public';

app.set('views', './views');
app.set('view engine', 'jade');


app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(base));
app.use(morgan('dev'));

var router = require(process.cwd() +  '/app/router');
app.use('/api/v1', router);

app.listen(port, function () {
    return console.log("listening on port: ", port);
});
