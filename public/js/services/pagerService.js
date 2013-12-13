vimeoApp.service('pagerService', ['$http', '$location', function ($http, $location) {
	
	var videosPerPage = 25;

	var sortOrder = 'default';
	var maxPageNumber;

	return {
		getVideosPerPage:function(){
			return videosPerPage;
		},

		playVideo: function(id){
			console.log("Playing video id: " + id);
        	$location.path('/player/' + id);
		},

		pagination: function(pageNumber, isNext){
			if (pageNumber !== 1 || pageNumber !== this.maxPageNumber ){
	            pageNumber = isNext ? pageNumber + 1 : pageNumber - 1;
	        	return pageNumber;
	        }

		},

		getMaxPageNumber: function(){
			return maxPageNumber || 0;
		},

		setMaxPageNumber: function(totalVideos){
			maxPageNumber = Math.ceil(totalVideos / videosPerPage);
			return maxPageNumber;	
		}
	};
}]);