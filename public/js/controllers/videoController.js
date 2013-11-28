vimeoApp.controller('VideosCtrl', ['$scope', '$rootScope', '$routeParams', '$location', 'videosService', 
    function ($scope, $rootScope, $routeParams, $location, videosService) {

   console.log('VideosCtrl...')

   var VIDEOS_PER_PAGE = 25;

   $scope.query = $routeParams.query;
   $scope.pageNumber = 1;

   if (!$scope.query){
    $scope.query = 'vimeohq';
   }

   $scope.videos = {};
   
    var getVideos = function(){
        videosService.getVideos($scope.query, $scope.pageNumber).success(function(data, status){
            console.log(data)
            $scope.videos = data.videos;
        });

    }

   
    $scope.play = function(id){
        console.log("Playing video id: " + id);
        $location.path('/player/' + id);
    }

    $scope.page = function(isNext){
        
        if ($scope.pageNumber !== 1 || $scope.pageNumber !== $scope.maxPageNumber() ){
            $scope.pageNumber = isNext ? $scope.pageNumber + 1 : $scope.pageNumber - 1;
            getVideos();
        }
    }

    $scope.maxPageNumber = function(){
        return  Math.ceil($scope.videos.total / VIDEOS_PER_PAGE)
    }


    getVideos();

}]);