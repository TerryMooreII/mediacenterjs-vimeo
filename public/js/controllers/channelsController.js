vimeoApp.controller('ChannelsCtrl', ['$scope', '$rootScope', '$routeParams', 'channelsService', 
	function ($scope, $rootScope, $routeParams, channelsService) {
    

    console.log('ChannelsCtrl...')
   	
   	$scope.channel = $routeParams.channel;

   	if (!$scope.channel){
   		$scope.channel = 'vimeohq';
   	}

   	$scope.videos = [];

   	channelsService.getChannels($scope.channel).success(function(data, status){
   		console.log(data)
   		$scope.videos = data.videos.video;
   	});

}]);