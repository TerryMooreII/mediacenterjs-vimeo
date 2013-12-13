vimeoApp.controller('VideosCtrl', ['$scope', '$rootScope', '$routeParams', '$location', 'videosService',  'pagerService',
    function ($scope, $rootScope, $routeParams, $location, videosService, pagerService) {

   console.log('VideosCtrl...');

    $scope.query = $routeParams.query;
    $scope.sortOrder = 'default';
    $scope.videos = {};

    $scope.pageNumber = 1;
    
    if (!$scope.query){
        $scope.query = 'vimeohq';
    }

    var getVideos = function(){
        videosService.getVideos($scope.query, $scope.pageNumber, $scope.sortOrder).success(function(data, status){
            $scope.videos = data.videos;
            pagerService.setMaxPageNumber(data.videos.total);
            window.scrollTo(0);
        });
    };

    $scope.maxPageNumber = function(){
        return pagerService.getMaxPageNumber();
    };
   
    $scope.play = function(id){
        pagerService.playVideo(id);
    };

    $scope.page = function(isNext){
        $scope.pageNumber = pagerService.pagination($scope.pageNumber, isNext);
        getVideos();
    };

    $scope.sortBy = function(sort){
        $scope.pageNumber = 1;
        $scope.sortOrder = sort;
        getVideos();
    };

    getVideos();

}]);