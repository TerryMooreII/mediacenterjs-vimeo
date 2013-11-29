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
      templateUrl: 'public/views/channels.html',
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

vimeoApp.filter('videoDescription', function() {
  return function(input) {
    return input.split('\n')[0];
  };
});

vimeoApp.directive('myFrame', ['$rootScope', 
   function () {
    return {
        restrict: 'E',
        require: '?ngModel',
        replace: true,
        transclude: true,
        template: '<iframe id="player1" frameborder="0"  webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>',
        link: function (scope, element, attrs) {
            element.attr('src', attrs.iframeSrc);
        }
    };
  }])