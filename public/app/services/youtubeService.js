angular.module('youtubeServiceModule', [])
    .factory('youtubeService', function ($http, options) {
        return {
            extractAudioFromUrl: function(requestUrl, callback) {

                $http.get(options.API_URL + 'getAudioFile/' + requestUrl)
                    .then(
                        function (response) {
                            callback( response );
                        },
                        function errorCallBack(error) {
                            console.log("An error occured.")
                        }
                    );

            }
        }
    });
