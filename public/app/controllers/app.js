var youtubeDownloader = angular.module('youtubeDownloader', [
    'youtubeAppModule',
    'youtubeServiceModule'
])
.value('options', {
   'API_URL': 'https://youtubetomp3ly.herokuapp.com/api/v1'
 });
