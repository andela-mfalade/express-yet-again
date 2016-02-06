let express = require('express'),
    fs = require('fs'),
    app = express(),
    port = 8080;

app.get('/', (req, res) => {
    res.send('Hello, how are you??');
})


app.listen(port, () => console.log("listening on port: ", port));
