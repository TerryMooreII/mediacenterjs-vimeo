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


vimeoApp.directive('vimeoChannels', ['$rootScope', 
   function () {
    return {
      restrict: 'E',
      template: ['<div ng-repeat="channel in channels.channel">',
                 '<p class="mcjs-rc-controllable mcjs-rc-clickable" ng-click="gotoChannel(channel.id)">',
                 '<span class="upload-date">{{channel.created_on}}</span>',
                 '<img ng-src="{{channel.thumbnail_url}}" >',
                 '<span class="title">{{channel.name}}</span>',
                 '</p>',
                 '</div>'].join('')
  };
}]);

vimeoApp.directive('vimeoVideo', ['$rootScope', 
   function () {
    return {
      restrict: 'E',
      template: ['<div ng-repeat="video in videos.video">',
                 '<p class="mcjs-rc-controllable mcjs-rc-clickable" ng-click="play(video.id)">',
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
                 '<li class="previous mcjs-rc-controllable mcjs-rc-clickable" ><a ng-class="{disabled: pageNumber === 1}" ng-click="page(false)">&larr; Previous</a></li>',
                 '<li class="page-number">Page {{pageNumber}}</li>',
                 '<li class="next mcjs-rc-controllable mcjs-rc-clickable"><a ng-class="{disabled: pageNumber === maxPageNumber()}" ng-click="page(true)">Next &rarr;</a></li>',
                 '</ul>'].join('')
  };
}]);
