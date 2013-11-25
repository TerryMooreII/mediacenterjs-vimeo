youtubeApp.service('SearchYoutube', ['$http', function ($http) {
        return {
                search: function(query) {
                        return $http.post('/youtube/searchYoutube', {'q': query});
                }
        }
}]);