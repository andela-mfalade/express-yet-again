const APP        = process.cwd() + '/server/';
var express      = require( 'express' );
var urlScanner   = require( APP + 'middlewares/urlScanner' )
var resonseUtils = require( APP + 'utils/response' );
var vidCtrl      = require( APP + 'controllers/server.video.converter.controller' );

var apiRouter = express.Router( { mergeParams: true } );

apiRouter
  .use( urlScanner );

// apiRouter
//   .route( '/favicon.ico' )
//     .get( resonseUtils.endRequest )
//     .post( resonseUtils.endRequest );

apiRouter
  .route( '/convert' )
    .post( vidCtrl.downloadVid );


module.exports = apiRouter;
