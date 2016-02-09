var utils = {
    verifyUrl: function (req, res, next) {
        var videoUrl = req.params.url;
        if(/^xxx|xxx$/.test(videoUrl)) {
            var response = {
                'status_code': 403,
                'text': 'Sorry, you cannot download porn videos here.'
            };
            res.status(403).send(response)
        }
        else if (videoUrl.length <= 2){
            res.status(404).json('Resource not found.');
        } else {
            next();
        }
    }
}

module.exports = utils;
