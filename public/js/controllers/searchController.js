vimeoApp.controller('SearchCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    console.log('SearchCtrl...')
    
    var SEARCH_MESSAGE = 'searchMessage'

    $scope.search;

    $scope.getSearch = function(event) {
        if (!$scope.search)
            return;
        
        console.log('SearchCtrl.getSearch Searching for ' + $scope.search);
        
        $rootScope.$broadcast(SEARCH_MESSAGE, {search: $scope.search} );

    };

    // $rootScope.$on(SEARCH_MESSAGE, function(event, data){
    //     console.log('in message: ' + data.search)
    // } )

}]);