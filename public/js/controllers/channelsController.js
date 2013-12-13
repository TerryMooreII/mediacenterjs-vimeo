vimeoApp.controller('ChannelsCtrl', ['$scope', '$rootScope', '$routeParams', '$location', 'channelsService', 'pagerService',
	function ($scope, $rootScope, $routeParams, $location, channelsService, pagerService) {

    console.log('ChannelsCtrl...');
   
    $scope.channel = $routeParams.channel;
    $scope.pageNumber = 1;
    $scope.videos = [];

    var getVideos = function(){
        channelsService.getChannelVideos($scope.channel, $scope.pageNumber, $scope.sortOrder).success(function(data, status){
            console.log(data);
            $scope.videos = data.videos;
            pagerService.setMaxPageNumber(data.videos.total);
            window.scrollTo(0);
        });
    };
    
    var getChannels = function(){
        channelsService.getChannels($scope.pageNumber, $scope.sortOrder).success(function(data, status){
            console.log(data);
            console.log('page number: ' + $scope.pageNumber)
            $scope.channels = data.channels;
            pagerService.setMaxPageNumber(data.channels.total);
            window.scrollTo(0);
        });
    };

    $scope.maxPageNumber = function(){
        return pagerService.getMaxPageNumber();
    };
    
    $scope.gotoChannel = function(id){
        $location.path('/channels/' + id);
    };

    $scope.play = function(id){
        pagerService.playVideo(id);
    };

    $scope.maxPageNumber = function(){
        return pagerService.getMaxPageNumber();
    };
    
    $scope.page = function(isNext){
        $scope.pageNumber = pagerService.pagination($scope.pageNumber, isNext);
        
        isChannels? getChannels() : getVideos();
    };


    $scope.sortBy = function(sort){
        $scope.pageNumber = 1;
        $scope.sortOrder = sort;
        isChannels? getChannels() : getVideos();
    };

    var init = function(){

        if($scope.channel)
           getVideos();
        else
            getChannels(); 
    };

    var isChannels = function(){
        return $scope.channels ? true : false;
    };

    init();

}]);