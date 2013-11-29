vimeoApp.controller('SubcategoriesCtrl', ['$scope', '$rootScope', '$routeParams', '$location', 'categoriesService', 
    function ($scope, $rootScope, $routeParams, $location, categoriesService) {

    console.log('SubcategoriesCtrl...');

    var VIDEOS_PER_PAGE = 25;    

    $scope.subcategory = $routeParams.subcategory;
    $scope.pageNumber = 1;
    $scope.videos = {};
    $scope.subcategoryList = {};

    $scope.subcategoryName = '';
    $scope.categoryName = '';

    
    if (!$scope.subcategory){
        $scope.subcategory = 'vimeohq';
    }

    var getVideos = function(){
        categoriesService.getRelatedVideos($scope.subcategory, $scope.pageNumber).success(function(data, status){
            console.log('Category Vidoes:');
            console.log(data);
            if (!data.error)
                $scope.videos = data.videos;
        });
    }

    var getInfo = function(category){

        if (!category || category === undefined){
            category = $scope.subcategory
        }
        
        categoriesService.getInfo(category).success(function(data, status){
            console.log('Subcategory List:');
            console.log(data);
            
            if (data.error)
                return;

            var cat = data.category[0];
            if (cat.is_sub == "1"){
                getInfo(cat.parent.word);
                $scope.subcategoryName = cat.name;
                return;
            }
            $scope.categoryName = data.category[0].name;
            $scope.subcategoryList = data.category;


        });
    }
   
    $scope.play = function(id){
        console.log("Playing video id: " + id);
        $location.path('/player/' + id);
    }

    $scope.page = function(isNext){
        
        if ($scope.pageNumber !== 1 || $scope.pageNumber !== $scope.maxPageNumber() ){
            $scope.pageNumber = isNext ? $scope.pageNumber + 1 : $scope.pageNumber - 1;
            getVideos();
        }
    }

    $scope.maxPageNumber = function(){
        return  Math.ceil($scope.videos.total / VIDEOS_PER_PAGE)
    }

    $scope.getData = function(){
        getVideos();
        getInfo();    
    }
    
    $scope.getSubcategoryVideos = function(category){
      $location.path('/categories/' + category.word)
   }

    $scope.getData();

}]);