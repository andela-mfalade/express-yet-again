var fs = require('fs'),
    ffmpeg = require('fluent-ffmpeg'),
    youtubedl = require('youtube-dl'),
    firebaseUtils = require(process.cwd() + '/app/utils/firebaseUtils');

var vidUtils = { downloadVid: downloadVid };

function downloadVid(req, res) {
    var vidUrl = req.body.videoUrl,
        videoUrl = decodeURIComponent(vidUrl);

    var video = youtubedl(
        videoUrl,
        ['--format=18'],
        { cwd: process.cwd() }
    );

    video.on('info', function(info) {
        console.log('Download started');
        console.log('filename: ' + info._filename);
        console.log('size: ' + info.size);
    });

    proc = new ffmpeg({source:video})
    proc.saveToFile('vid.mp3', function (stdout, stderr) {
        console.log(stderr, "stderr");
        console.log(stdout, "stdout");
    })
}

module.exports = vidUtils;
