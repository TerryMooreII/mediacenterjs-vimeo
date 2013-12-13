vimeoApp.controller('SearchCtrl', ['$scope', '$rootScope', '$location' ,'videosService', function ($scope, $rootScope, $location, videosService) {
    console.log('SearchCtrl...');
   
    $scope.search;

    $scope.getSearch = function(event) {
        if (!$scope.search)
            return;
        
        console.log('SearchCtrl.getSearch Searching for ' + $scope.search);        
        $location.path('/videos/' + $scope.search);

    };
}]);