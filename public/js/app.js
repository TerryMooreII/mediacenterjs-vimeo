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


vimeoApp.directive('vimeoVideo', ['$rootScope', 
   function () {
    return {
      restrict: 'E',
      template: ['<div ng-repeat="video in videos.video">',
                 '<p ng-click="play(video.id)">',
                 '<span class="upload-date">{{video.upload_date}}</span>',
                 '<img ng-src="{{video.thumbnails.thumbnail[2]._content}}" >',
                 '<span class="title">{{video.title}}</span>',
                 '</p>',
                 '</div>'].join('')
  };
}]);

vimeoApp.directive('vimeoPager', ['$rootScope', 
   function () {
    return {
      restrict: 'E',
      template: ['<ul class="pager">',
                 '<li class="previous" ><a ng-class="{disabled: pageNumber === 1}" ng-click="page(false)">&larr; Previous</a></li>',
                 '<li class="next"><a ng-class="{disabled: pageNumber === maxPageNumber()}" ng-click="page(true)">Next &rarr;</a></li>',
                 '</ul>'].join('')
  };
}]);


