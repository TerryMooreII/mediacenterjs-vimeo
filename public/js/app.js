var vimeoApp = angular.module('vimeoApp', ['ngRoute']);
  
vimeoApp.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $routeProvider.when('/videos', {
      templateUrl: 'public/views/videos.html',
      controller: 'VideoCtrl'
    })
    .when('/categories/:category', {
      templateUrl: 'public/views/categories.html',
      controller: 'CategoriesCtrl'
    })
    .when('/categories', {
      templateUrl: 'public/views/categories.html',
      controller: 'CategoriesCtrl'
    })
    .when('/channels', {
      templateUrl: 'public/views/channels.html',
      controller: 'ChannelsCtrl'
    })
    .when('/channels/:channel', {
      templateUrl: 'public/views/channels.html',
      controller: 'ChannelsCtrl'
    })
    // .when('/video/:id', {
    //   templateUrl: 'views/videoContainer.html',
    //   controller: 'VideoCtrl'
    // })
    .otherwise({
      redirectTo: '/'
    });
}]);

vimeoApp.filter('videoDescription', function() {
  return function(input) {
    return input.split('\n')[0];
  };
});