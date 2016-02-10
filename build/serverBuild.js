let express = require('express'),
    morgan = require('morgan'),
    path = require('path'),
    cors = require('cors'),
    fs = require('fs'),
    app = express(),
    port = process.env.PORT || 8080,
    base = __dirname + '/public';

app.set('views', './views');
app.set('view engine', 'jade');

app.use(cors());
app.use(express.static(base));
app.use(morgan('dev'));

let indexRouter = require('./routes/index');
let downloadRouter = require('./routes/download');
app.use('/', indexRouter);
app.use('/download/', downloadRouter);

app.listen(port, () => console.log("listening on port: ", port));
