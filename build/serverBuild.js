let express = require('express'),
    morgan = require('morgan'),
    path = require('path'),
    cors = require('cors'),
    fs = require('fs'),
    app = express(),
    port = 8080,
    base = __dirname + '/public';


app.use(cors());
app.use(express.static(base));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: base});
});

app.get('/getAudioFile/:url', (req, res) => {
    console.log(req.params.url, "This is the requrest body");
    res.send("Okay, we got you...");
});

app.listen(port, () => console.log("listening on port: ", port));
