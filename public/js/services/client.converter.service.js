angular
  .module( 'youtubeDownloader.service')
  .factory( 'youtubeDownloadService', youtubeDownloadService);

  function youtubeDownloadService($http, options) {
    return {
      convert: convert,
      getVideoInfo: getVideoInfo
    };

    function convert(requestUrl) {
      var apiUrl = options.API_URL + '/convert';
      var payload = { videoUrl: requestUrl };
      return $http
        .post( apiUrl, payload )
        .then(function(res) {
          return res;
        });
    }


    function getVideoInfo(requestUrl) {
      var apiUrl = options.API_URL + '/info/';
      var youtubeInfoUrl = 'http://www.youtube.com/oembed?url=';
      var payload = { videoUrl: youtubeInfoUrl + requestUrl + '&format=json'};
      return $http
        .post( apiUrl, payload )
        .then(function(res) {
          return res;
        });
    }
  }
