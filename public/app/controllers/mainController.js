angular.module( 'youtubeAppModule', [ 'youtubeServiceModule' ] )
    .controller( 'youtubeAppController', function( $scope, youtubeService ) {
        $scope.resetValuesExcept = function( param ) {
            // Simple method used to change the values of the desired scope variable passed in as param
            // If this value is none, it means no scope variable should be changed.
            $scope.downloadReady     = false;
            $scope.processingRequest = false;
            $scope.notFound          = false;
            $scope.obseneUrl         = false;
            if ( param ) {
                $scope[ param ] = true;
            }
        };
        $scope.resetValuesExcept( false );
        $scope.convertUrl = function () {
            $scope.resetValuesExcept( false );
            if( $scope.youtubeUrl ) {
                var videoUrl = encodeURIComponent( $scope.youtubeUrl );
                youtubeService.extractAudioFromUrl( videoUrl , function( res ) {
                    response = res.data;
                    if ( res.status === 200 && res.data && res.data.title ) {
                        $scope.downloadReady = true;
                        $scope.resetValuesExcept( 'downloadReady' );
                        $scope.videoInfo = res.data;
                    }
                    else if ( res.status === 403 ) {
                        $scope.resetValuesExcept( 'obseneUrl' );
                        $scope.feedback = response.text;
                    }
                    else {
                        $scope.resetValuesExcept( 'notFound' );
                    }
                });
            }
        };

    });
