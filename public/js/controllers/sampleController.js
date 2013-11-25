youtubeApp.controller('MainCtrl', ['$scope', 'Index', 'OauthAng', '$location', 'Videos', function ($scope, Index, OauthAng, $location, Videos) {
        if(!localStorage.getItem('oauth_key')) {
                OauthAng.getKey().success(function (data) {
                        localStorage.setItem('oauth_key', data.key);
                }).error(function (data) {
                        $scope.error = data.error;
                });
        } else if(!localStorage.getItem('oauth_token')) {
                $scope.tokenerror = 'Need to re-authenticate to Google, popup in ';
        } else {
                Index.success(function (data) {
                        $scope.videos = data.videos;
                }).error(function (data) {
                        $scope.tokenerror = data.error;
                });
        }
        $scope.displayVideo = function(event, videoID) {
                $location.path('/video/' + videoID);
        };
}]);