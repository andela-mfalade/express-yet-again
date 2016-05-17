var express      = require('express');
var urlScanner   = require(process.cwd() + '/app/middlewares/urlScanner')
var resonseUtils = require(process.cwd() + '/app/utils/response');
var vidUtils     = require(process.cwd() + '/app/controllers/videoDownloader');
var vidUtils2     = require(process.cwd() + '/app/controllers/videoDownloader2');

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
