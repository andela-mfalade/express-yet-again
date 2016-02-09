angular.module('youtubeAppModule', ['youtubeServiceModule'])
    .controller('youtubeAppController', function ($scope, youtubeService) {
        $scope.resetValuesExcept = function(param) {
            $scope.downloadReady = false;
            $scope.processingRequest = false;
            $scope.notFound = false;
            $scope.obseneUrl = false;
            $scope[param] = true;
        };
        $scope.resetValuesExcept();
        $scope.convertUrl = function () {
            if($scope.youtubeUrl) {
                youtubeService.extractAudioFromUrl($scope.youtubeUrl , function(res) {
                    response = res.data;
                    console.log(res.status);
                    if (res.status === 200) {
                        $scope.downloadReady = true;
                        $scope.resetValuesExcept('downloadReady');
                    }
                    else if (res.status === 403) {
                        $scope.resetValuesExcept('obseneUrl');
                        $scope.feedback = response.text;
                    }
                    else if (res.status === 404) {
                        $scope.resetValuesExcept('notFound');
                    }
                });
            }
        };

    });
