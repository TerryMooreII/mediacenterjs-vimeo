vimeoApp.controller('CategoriesCtrl', ['$scope', '$rootScope', '$routeParams', '$location', 'categoriesService', 
	function ($scope, $rootScope, $routeParams, $location, categoriesService) {

   	console.log('CategoriesCtrl...')
	
	$scope.category = $routeParams.category;

	if (!$scope.category){
		$scope.category = '';
	}

	$scope.categories = {};


	categoriesService.getCategories($scope.category).success(function(data, status){
		console.log(data);
		$scope.categories = data.categories;
	});

   	$scope.getSubCategoryVideos = function(category){
     	$location.path('/categories/' + category.word);
   	};

}]);