//-  This is an alternative to the videoDownloader Module.
//- Trying out different approaches. Not functional yet

// var ffmpeg    = require( 'fluent-ffmpeg' );
var fs        = require('fs');
var request   = require( 'request' );
var youtubedl = require( 'youtube-dl' );
var ytdl      = require('ytdl-core');


function downloadVid( req, res ) {
    var videoUrl = decodeURIComponent( req.body.videoUrl );
    ytdl(videoUrl)
      .pipe(fs.createWriteStream('video.flv'));
      res
        .status(200)
        .download('video.flv');
}


function getVideoInfo( req, res ) {
  request(req.body.videoUrl, returnVideoInfo);
  function returnVideoInfo(err, response, body) {
    if (!err && response.statusCode == 200) {
      return res.status(200).send(body);
    }
    return res.status(404);
  }
}

exports.downloadVid = downloadVid;
exports.getVideoInfo = getVideoInfo;


/*
  https://www.youtube.com/watch?v=-SBj50bho48&list=RDEM9inqspo5JTQrtS0enC4HpA&index=14


*/
