const APP        = process.cwd() + '/server/';
var express      = require( 'express' );
var urlScanner   = require( APP + 'middlewares/urlScanner' )
var resonseUtils = require( APP + 'utils/response' );
var vidCtrl      = require( APP + 'controllers/server.video.converter.controller' );

var apiRouter = express.Router( { mergeParams: true } );

apiRouter
  .use( urlScanner );

apiRouter
  .route( '/info' )
    .post( vidCtrl.getVideoInfo );


apiRouter
  .route( '/convert' )
    .post( vidCtrl.getVideoInfo );


module.exports = apiRouter;
