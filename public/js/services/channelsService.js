vimeoApp.service('channelsService', ['$http', function ($http) {
    return {
        getChannels: function(channel) {
            return $http.get('/mediacenterjs-vimeo/channels/' + channel);
        }
    }
}]);