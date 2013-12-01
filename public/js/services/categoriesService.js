vimeoApp.service('categoriesService', ['$http', function ($http) {
    return {
        getCategories: function(category) {
            return $http.get('/mediacenterjs-vimeo/categories/' + category);
        },

        getInfo: function(category){
        	return $http.get('/mediacenterjs-vimeo/categoryInfo/' + category)
        },

        getRelatedVideos: function(category, page, sort){
            var params = [];
            if (page)
                params.push('page=' + page);
            if (sort)
                params.push('sort=' + sort);

        	return $http.get('/mediacenterjs-vimeo/categories/' + category + '?' + params);
        }
    }
}]);