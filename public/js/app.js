var vimeoApp = angular.module('vimeoApp', ['ngRoute']);
  
vimeoApp.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $routeProvider.when('/videos', {
      templateUrl: 'public/views/videos.html',
      controller: 'VideosCtrl'
    })
    .when('/videos/:query', {
      templateUrl: 'public/views/videos.html',
      controller: 'VideosCtrl'
    })
    .when('/categories/:subcategory', {
      templateUrl: 'public/views/subcategories-videos.html',
      controller: 'SubcategoriesCtrl'
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
      templateUrl: 'public/views/channels-videos.html',
      controller: 'ChannelsCtrl'
    })
    .when('/player/:videoId', {
      templateUrl: 'public/views/player.html',
      controller: 'PlayerCtrl'
    })
    .otherwise({
      redirectTo: '/channels'
    });
}]);


