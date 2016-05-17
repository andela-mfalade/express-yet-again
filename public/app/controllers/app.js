var youtubeDownloader = angular.module('youtubeDownloader', [
    'youtubeAppModule',
    'youtubeServiceModule'
])
.value('options', {
   // 'API_URL': 'http://localhost:5000/api/v1'
   'API_URL': 'https://youtubetomp3ly.herokuapp.com/api/v1'
 });
