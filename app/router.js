const APP        = process.cwd() + '/app/';
var express      = require( 'express' );
var urlScanner   = require( APP + 'middlewares/urlScanner' )
var resonseUtils = require( APP + 'utils/response' );
var vidCtrl      = require( APP + 'controllers/videoDownloader' );
var vidCtrlAlt   = require( APP + 'controllers/videoDownloaderAlt' );

var apiRouter = express.Router( { mergeParams: true } );

apiRouter.use( urlScanner );

apiRouter.route( '/favicon.ico' )
    .get( resonseUtils.endRequest )
    .post( resonseUtils.endRequest );

apiRouter.route( '/download' )
    .post( vidCtrl.downloadVid );
    // .post( vidCtrlAlt.downloadVid );

module.exports = apiRouter;
