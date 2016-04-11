angular.module('youtubeServiceModule', [])
    .factory('youtubeService', function ($http, options) {
        return {
            extractAudioFromUrl: function(requestUrl, callback) {
                var apiUrl = options.API_URL + '/download';
                var payload = { videoUrl: requestUrl };
                console.log(payload)
                $http.post(apiUrl, payload)
                    .then(
                        function (response) {
                            console.log(response)
                            callback(response);
                        },
                        function errorCallBack(error) {
                            callback (error);
                            console.log("An error occured.", error)
                        }
                    );

            }
        }
    });
