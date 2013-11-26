vimeoApp.service('categoriesService', ['$http', function ($http) {
    return {
        getCategories: function(category) {
            return $http.get('/mediacenterjs-vimeo/categories/' + category);
        }
    }
}]);