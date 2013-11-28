vimeoApp.controller('ChannelsCtrl', ['$scope', '$rootScope', '$routeParams', '$location', 'channelsService', 
	function ($scope, $rootScope, $routeParams, $location, channelsService) {

   console.log('ChannelsCtrl...')

   $scope.channel = $routeParams.channel;

   if (!$scope.channel){
   	$scope.channel = 'vimeohq';
   }

   $scope.videos = [];

   channelsService.getChannels($scope.channel).success(function(data, status){
   	console.log(data)
   	$scope.videos = data.videos;
   });

   $scope.play = function(id){
		console.log("Playing video id: " + id);
		$location.path('/player/' + id);
   }

}]);