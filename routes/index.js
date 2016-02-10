var express = require('express'),
    indexRouter = express.Router({ mergeParams: true });

indexRouter.get('/', function (req, res) {
    res.sendFile('index.html', {root: base});
});

indexRouter.get('/favicon.ico', function (req, res) {
    res.end();
});

module.exports = indexRouter;
