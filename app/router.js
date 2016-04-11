var express      = require('express');
var urlScanner   = require(process.cwd() + '/app/middlewares/urlScanner')
var resonseUtils = require(process.cwd() + '/app/utils/response');
var vidUtils     = require(process.cwd() + '/app/controllers/videoDownloader');

function routerConfig() {
    var apiRouter = express.Router({ mergeParams: true });

    apiRouter.use(urlScanner);

    apiRouter.route('/favicon.ico')
        .get(resonseUtils.endRequest);

    apiRouter.route('/download')
        .post(vidUtils.downloadVid);

    return apiRouter;
};


module.exports = routerConfig();
