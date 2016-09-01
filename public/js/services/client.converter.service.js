angular
  .module( 'youtubeDownloader.service')
  .factory( 'youtubeDownloadService', youtubeDownloadService);

  function youtubeDownloadService($http, options) {
    return {convert: convert};

    function convert(requestUrl) {
      var apiUrl = options.API_URL + '/convert';
      var payload = { videoUrl: requestUrl };
      return $http
        .post( apiUrl, payload )
        .then(function(res) {
          return res;
        });
    }
  }
