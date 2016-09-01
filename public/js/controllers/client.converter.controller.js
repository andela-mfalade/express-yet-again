angular
  .module( 'youtubeDownloader.controller' )
  .controller( 'youtubeAppController', youtubeAppController);

  function youtubeAppController(youtubeDownloadService) {
    var vm = this;
    
    vm.resetValuesExcept = function( param ) {
      vm.downloadReady     = false;
      vm.processingRequest = false;
      vm.notFound          = false;
      vm.obseneUrl         = false;
      if ( param ) {
        vm[ param ] = true;
      }
    };

    vm.resetValuesExcept(0);

    vm.convertUrl = function () {
      vm.resetValuesExcept( 0 );
      if( vm.youtubeUrl ) {
        var videoUrl = encodeURIComponent( vm.youtubeUrl );
        youtubeDownloadService.convert( videoUrl ).then( function( res ) {
          response = res.data;
          if ( res.status === 200 && res.data && res.data.title ) {
            vm.downloadReady = true;
            vm.resetValuesExcept( 'downloadReady' );
            vm.videoInfo = res.data;
          }
          else if ( res.status === 403 ) {
            vm.resetValuesExcept( 'obseneUrl' );
            vm.feedback = response.text;
          }
          else {
            vm.resetValuesExcept( 'notFound' );
          }
        });
      }
    };
  }

  youtubeAppController.$inject = ['youtubeDownloadService']
