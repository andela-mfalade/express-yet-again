var fs = require('fs'),
    express = require('express'),
    request = require('request'),
    outputFile = '../allqueries.json',
    utils = require('../utils/urlScan'),
    writeable = fs.createWriteStream(outputFile);
    downloadRouter = express.Router({ mergeParams: true }),

downloadRouter.get('/:url', utils.verifyUrl, function (req, res) {
    var urlPrefix = 'http://www.youtubeinmp3.com/fetch/?format=JSON&video=',
        videoUrl = decodeURIComponent(req.params.url),
        serviceUrl = urlPrefix + videoUrl;
        response = {
            'status_code': 400,
            'text': 'File Not Found On The Stupid API!'
        };
    request(serviceUrl, function (err, response, body) {
        if (!err && response.statusCode === 200) {
            res.status(200).send(response.body);
        } else {
            res.status(404).json(response);
        }
    });
});

module.exports = downloadRouter;
