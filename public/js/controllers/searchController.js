vimeoApp.controller('SearchCtrl', ['$scope', '$rootScope', '$location' ,'videosService', function ($scope, $rootScope, $location, videosService) {
    console.log('SearchCtrl...')
    
    var SEARCH_MESSAGE = 'searchMessage'

    $scope.search;

    $scope.getSearch = function(event) {
        if (!$scope.search)
            return;
        
        console.log('SearchCtrl.getSearch Searching for ' + $scope.search);
        
        $rootScope.$broadcast(SEARCH_MESSAGE, {search: $scope.search} );
          
    };
}]);