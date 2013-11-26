vimeoApp.controller('CategoriesCtrl', ['$scope', '$rootScope', '$routeParams', 'categoriesService', 
	function ($scope, $rootScope, $routeParams, categoriesService) {
    

    console.log('CategoriesCtrl...')
   	
   	$scope.category = $routeParams.category;

   	if (!$scope.category){
   		$scope.category = '';
   	}

   	$scope.categories = {};


   	categoriesService.getCategories($scope.category).success(function(data, status){
   		console.log(data)
   		$scope.categories = data.categories.category;
   	});




}]);