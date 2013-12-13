vimeoApp.controller('PlayerCtrl', ['$scope', '$routeParams', 
	function ($scope, $routeParams) {
    
    console.log('PlayerCtrl...');
      
    $scope.videoId = $routeParams.videoId;

    $scope.errorMessage = '';

    if (!$scope.videoId){
      console.log('No video Id provided')
      $scope.errorMessage = 'No video id was provided';      
    };

}]);