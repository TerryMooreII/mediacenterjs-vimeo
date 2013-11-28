vimeoApp.service('videosService', ['$http', function ($http) {
	return {
	    getVideos: function(query, page, sort) {
			var params = [];
			if (page)
				params.push('page=' + page);
			if (sort)
				params.push('sort=' + sort);

	        return $http.get('/mediacenterjs-vimeo/search/' + query + '?' + params.join('&'));
        }
	}
}]);