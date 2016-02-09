angular.module('youtubeServiceModule', [])
    .factory('youtubeService', function ($http, options) {
        return {
            extractAudioFromUrl: function(requestUrl, callback) {
                $http.get(options.API_URL + 'download/' + requestUrl)
                    .then(
                        function (response) {
                            callback( response );
                        },
                        function errorCallBack(error) {
                            callback ( error );
                            console.log("An error occured.")
                        }
                    );

            }
        }
    });
