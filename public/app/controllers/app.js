var youtubeDownloader = angular.module('youtubeDownloader', [
    'youtubeAppModule',
    'youtubeServiceModule'
])
.value('options', {
   'API_URL': 'http://localhost:8080/'
 });
