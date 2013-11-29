vimeoApp.controller('ChannelsCtrl', ['$scope', '$rootScope', '$routeParams', '$location', 'channelsService', 
	function ($scope, $rootScope, $routeParams, $location, channelsService) {

   console.log('ChannelsCtrl...')
   var VIDEOS_PER_PAGE = 25;

   $scope.channel = $routeParams.channel;
   $scope.pageNumber = 1;
  
   if (!$scope.channel){
   	$scope.channel = 'vimeohq';
      $scope.pageNumber = 1;
   }

   $scope.videos = [];

   var getVideos = function(){
      channelsService.getChannels($scope.channel, $scope.pageNumber).success(function(data, status){
         console.log(data)
         $scope.videos = data.videos;
      });
   
   }
   
   $scope.play = function(id){
		console.log("Playing video id: " + id);
		$location.path('/player/' + id);
   }

   $scope.page = function(isNext){
        
         $scope.pageNumber = isNext ? $scope.pageNumber + 1 : $scope.pageNumber - 1;
         
         if ($scope.pageNumber !== 0 || $scope.pageNumber !== $scope.maxPageNumber() ){
            getVideos();
         }
    }

    $scope.maxPageNumber = function(){
        return  Math.ceil($scope.videos.total / VIDEOS_PER_PAGE)
    }

    getVideos();

}]);