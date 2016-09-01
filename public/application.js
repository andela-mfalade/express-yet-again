angular.module('youtubeDownloader.controller', []);
angular.module('youtubeDownloader.service', []);
angular.module('youtubeDownloader', [
  'youtubeDownloader.controller',
  'youtubeDownloader.service']
).value('options', {
  'API_URL': 'https://youtubetomp3ly.herokuapp.com/api/v1'
  // 'API_URL': 'http://localhost:5000/api/v1'
});
