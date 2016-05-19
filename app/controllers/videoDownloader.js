var fs             = require( 'fs' ),
    request        = require( 'request' ),
    firebaseUtils  = require( process.cwd() + '/app/utils/firebaseUtils' ),
    vidUtils       = { downloadVid: downloadVid };


function downloadVid( req, res ) {
    var urlPrefix    = 'http://www.youtubeinmp3.com/fetch/?format=JSON&video=',
        vidUrl       = req.body.videoUrl,
        videoUrl     = decodeURIComponent( vidUrl ),
        serviceUrl   = urlPrefix + videoUrl,
        now          = new Date(),
        currentDate  = now.toISOString().slice( 0, 10 ),
        payload      = {
            'url': videoUrl,
            'date': currentDate
        }

    request( serviceUrl, function( err, response, body ) {
        if ( !err && response.statusCode === 200 ) {
            var videoProps        = JSON.parse( response.body );
            payload.status        = 'succeeded';
            payload.title         = videoProps.title;
            payload.video_length  = Math.floor( videoProps.length / 60 );
            firebaseUtils.postContent( payload );
            res.status( 200 ).send( response.body );
        } else {
            payload.status = 'failed';
            firebaseUtils.postContent( payload );
            res.status( 404 ).json( response );
        }
    } );
}

module.exports = vidUtils;
