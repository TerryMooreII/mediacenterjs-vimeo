vimeoApp.controller('SubcategoriesCtrl', ['$scope', '$rootScope', '$routeParams', '$location', 'categoriesService', 'pagerService',
    function ($scope, $rootScope, $routeParams, $location, categoriesService, pagerService) {

    console.log('SubcategoriesCtrl...');

   
    $scope.subcategory = $routeParams.subcategory;
    $scope.pageNumber = 1;
    $scope.videos = {};
    $scope.subcategoryList = {};

    $scope.subcategoryName = '';
    $scope.categoryName = '';
    $scope.pageNumber = 1;

    
    if (!$scope.subcategory){
        $scope.subcategory = 'vimeohq';
    }

    var getVideos = function(){
        categoriesService.getRelatedVideos($scope.subcategory, $scope.pageNumber).success(function(data, status){
            console.log('Category Vidoes:');
            console.log(data);
            if (data.error)
                return;

            $scope.videos = data.videos;
            pagerService.setMaxPageNumber(data.videos.total);
            window.scrollTo(0);
        });
    };

    var getInfo = function(category){

        if (!category || category === undefined){
            category = $scope.subcategory;
        }
        
        categoriesService.getInfo(category).success(function(data, status){
            console.log('Subcategory List:');
            console.log(data);
            
            if (data.error)
                return;

            var cat = data.category[0];
            if (cat.is_sub == "1"){
                getInfo(cat.parent.word);
                $scope.subcategoryName = cat;
                return;
            }
            $scope.categoryName = data.category[0];
            $scope.subcategoryList = data.category[0];

        });
    };
   
    $scope.maxPageNumber = function(){
        return pagerService.getMaxPageNumber();
    };
   
    $scope.play = function(id){
        pagerService.playVideo(id);
    };

    $scope.page = function(isNext){
        $scope.pageNumber = pagerService.pagination($scope.pageNumber, isNext);
        getVideos();
    };

    $scope.getData = function(){
        getVideos();
        getInfo();    
    };
    
    $scope.getSubcategoryVideos = function(category){
        $location.path('/categories/' + category.word)
    };

    $scope.getData();

}]);