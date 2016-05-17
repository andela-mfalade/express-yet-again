const APP = process.cwd() + '/app/';

var express      = require('express');
var urlScanner   = require(APP + 'middlewares/urlScanner')
var resonseUtils = require(APP + 'utils/response');
var vidUtils     = require(APP + 'controllers/videoDownloader');
var vidUtils2     = require(APP + 'controllers/videoDownloader2');

function routerConfig() {
    var apiRouter = express.Router({ mergeParams: true });

    apiRouter.use(urlScanner);

    apiRouter.route('/favicon.ico')
        .get(resonseUtils.endRequest)
        .post(resonseUtils.endRequest);

    apiRouter.route('/download')
        .post(vidUtils.downloadVid);
        // .post(vidUtils2.downloadVid);

    return apiRouter;
};

module.exports = routerConfig();
