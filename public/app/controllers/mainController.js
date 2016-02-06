angular.module('youtubeAppModule', ['youtubeServiceModule'])
    .controller('youtubeAppController', function ($scope, youtubeService) {
        $scope.processingRequest = false;
        $scope.convertUrl = function () {
            if($scope.youtubeUrl) {
                youtubeService.extractAudioFromUrl($scope.youtubeUrl , function(response) {
                    $scope.responseText = response.data
                });
            }
        };

    });
