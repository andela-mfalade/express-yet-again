var express = require('express'),
    fs = require('fs'),
    downloadRouter = express.Router({ mergeParams: true }),
    utils = require('../utils/urlScan'),
    outputFile = '../allqueries.json',
    writeable = fs.createWriteStream(outputFile);

downloadRouter.get('/start/:videoUrl', function (req, res) {
    res.download("./sample.json", 'mac-virus.exe');
});

downloadRouter.get('/:url', utils.verifyUrl, function (req, res) {

    var videoUrl = req.params.url,
        response = {
            'status_code': 200,
            'text': 'File Ready!'
        };
    res.status(200).json(response);
});

module.exports = downloadRouter;
