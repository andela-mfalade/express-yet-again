function urlScanner(req, res, next) {
    vidUrl = req.body.videoUrl;
    var videoUrl = decodeURIComponent(vidUrl);

    if(/^xxx|xxx$/.test(videoUrl)) {
        var response = {
            'status_code': 403,
            'text': 'Errrm, that looks like an indecent vidoe url. Sorry, you cannot download such videos here.'
        };
        res.status(403).send(response)
    }

    else if (videoUrl.length <= 2){
        res.status(404).json('Resource not found.');
    }

    else {
        next();
    }
}

module.exports = urlScanner;
