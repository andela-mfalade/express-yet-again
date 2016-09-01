//-  This is an alternative to the videoDownloader Module.
//- Trying out different approaches. Not functional yet

// var ffmpeg    = require( 'fluent-ffmpeg' );
var youtubedl = require( 'youtube-dl' );
var vidUtils  = { downloadVid: downloadVid };

function downloadVid( req, res ) {
    var vidUrl   = req.body.videoUrl,
        videoUrl = decodeURIComponent( vidUrl ),
        video    = youtubedl(
            videoUrl,
            [ '--format=18' ],
            { cwd: process.cwd() }
        );

    video.on( 'info', function( info ) {
        console.log( 'Download started' );
        console.log( 'filename: ' + info._filename );
        console.log( 'size: ' + info.size );
    } );

    var proc = new ffmpeg( { source:video } );
    proc.saveToFile( 'vid.mp3', function ( stdout, stderr ) {
        console.log( stderr, "stderr" );
        console.log( stdout, "stdout" );
    } );
}

module.exports = vidUtils;
