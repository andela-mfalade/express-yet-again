function urlScanner( req, res, next ) {
    var vidUrl    = req.body.videoUrl,
        videoUrl  = decodeURIComponent( vidUrl );

    console.log(videoUrl, 'this is the Url');

    if( /^xxx|xxx$/.test( videoUrl ) ) {
        var response = {
            'status_code': 403,
            'text': 'That Url is Forbidden.'
        };
        res.status( 403 ).json( response );
    }
    else if ( videoUrl.length <= 2 ){
        res.status( 404 ).json( 'Resource not found.' );
    }
    else {
        next();
    }
}

module.exports = urlScanner;
