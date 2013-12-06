vimeoApp.service('channelsService', ['$http', function ($http) {
    return {
        getChannels: function(page, sort) {
        	var params = [];
			if (page)
				params.push('page=' + page);
			if (sort)
				params.push('sort=' + sort);

            return $http.get('/mediacenterjs-vimeo/channels?' + params.join('&'));
        },
        getChannelVideos: function(channel, page, sort) {
            var params = [];
            if (page)
                params.push('page=' + page);
            if (sort)
                params.push('sort=' + sort);

            return $http.get('/mediacenterjs-vimeo/channels/' + channel + '?' + params.join('&'));
        }

    }
}]);