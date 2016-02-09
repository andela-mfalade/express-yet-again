'use strict';

var express = require('express'),
    morgan = require('morgan'),
    path = require('path'),
    cors = require('cors'),
    fs = require('fs'),
    app = express(),
    port = 8080,
    base = __dirname + '/public';

app.set('views', './views');
app.set('view engine', 'jade');

app.use(cors());
app.use(express.static(base));
app.use(morgan('dev'));

var indexRouter = require('./routes/index');
var downloadRouter = require('./routes/download');
app.use('/', indexRouter);
app.use('/download/', downloadRouter);

app.listen(port, function () {
    return console.log("listening on port: ", port);
});
