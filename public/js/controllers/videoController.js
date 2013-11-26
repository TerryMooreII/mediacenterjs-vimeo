vimeoApp.controller('VideoCtrl', ['$scope', '$rootScope', 'videosService', function ($scope, $rootScope, videosService) {
    
    console.log('VideoCtrl...')
    
    var SEARCH_MESSAGE = 'searchMessage'

    var getVideos = function(event, data) {
        
        console.log('VideosCtrl.getVideos...');
       
        videosService.getVideos(data.search).success(function(data, status){
            console.log("video.ctrl ");
            console.log(data)
        })
    


    };

    $rootScope.$on(SEARCH_MESSAGE, getVideos);

}]);