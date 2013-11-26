vimeoApp.service('videosService', ['$http', function ($http) {
        return {
                getVideos: function(query) {
                        return $http.get('/mediacenterjs-vimeo/search/' + query);
                }
        }
}]);