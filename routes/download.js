var fs = require('fs'),
    express = require('express'),
    request = require('request'),
    Firebase = require("firebase"),
    utils = require('../utils/urlScan'),
    downloadRouter = express.Router({ mergeParams: true }),
    myFirebaseRef = new Firebase("https://youtubetomp3.firebaseio.com/");


downloadRouter.get('/:url', utils.verifyUrl, function (req, res) {
    var urlPrefix = 'http://www.youtubeinmp3.com/fetch/?format=JSON&video=',
        videoUrl = decodeURIComponent(req.params.url),
        serviceUrl = urlPrefix + videoUrl,
        now = new Date(),
        currentDate = now.toISOString().slice(0,10),
        payload = {
            'url': videoUrl,
            'date': currentDate
        }
    request(serviceUrl, function (err, response, body) {
        if (!err && response.statusCode === 200) {
            var videoProps = JSON.parse(response.body);
            payload.status = 'succeeded';
            payload.title = videoProps.title;
            payload.video_length = Math.floor(videoProps.length / 60);
            myFirebaseRef.push(payload);
            res.status(200).send(response.body);
        } else {
            payload.status = 'failed';
            myFirebaseRef.push(payload);
            res.status(404).json(response);
        }
    });
});

module.exports = downloadRouter;
