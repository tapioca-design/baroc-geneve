myApp.controller('ConcertsListController', ['$rootScope','$scope','$http', "$routeParams",'Data','Search', function($rootScope,$scope,$http, $routeParams, Data, Search) { 

      Data.headerTitle="Classic live Genève";
      $scope.Data = Data;
      $scope.Search = Search;

      $http.get('http://localhost/symfony/web/app_dev.php/api/city/1/worksOrderedByFirstPerformance').
        success(function(concerts) {
            $scope.concerts = concerts;
      });
      
      $scope.searchActiveToggle = function() {
          Data.searchActive = !Data.searchActive;
          $scope.searchActive = Data.searchActive;
          console.log("searchActive"+$scope.searchActive);
      };
      

 }]);

/***********************************************************************************************/
myApp.controller('ConcertController', ['$rootScope','$scope','$http', '$routeParams','Data','Search', function($rootScope,$scope,$http, $routeParams, Data, Search) {








$scope.colors = ["#fc0003", "#f70008", "#f2000d", "#ed0012", "#e80017", "#e3001c", "#de0021", "#d90026", "#d4002b", "#cf0030", "#c90036", "#c4003b", "#bf0040", "#ba0045", "#b5004a", "#b0004f", "#ab0054", "#a60059", "#a1005e", "#9c0063", "#960069", "#91006e", "#8c0073", "#870078", "#82007d", "#7d0082", "#780087", "#73008c", "#6e0091", "#690096", "#63009c", "#5e00a1", "#5900a6", "#5400ab", "#4f00b0", "#4a00b5", "#4500ba", "#4000bf", "#3b00c4", "#3600c9", "#3000cf", "#2b00d4", "#2600d9", "#2100de", "#1c00e3", "#1700e8", "#1200ed", "#0d00f2", "#0800f7", "#0300fc"];

            function getSlide(target, style) {
                var i = target.length;
                return {
                    id: (i + 1),
                    label: 'slide #' + (i + 1),
                    img: 'http://lorempixel.com/450/300/' + style + '/' + ((i + 1) % 10) ,
                    color: $scope.colors[ (i*10) % $scope.colors.length],
                    odd: (i % 2 === 0)
                };
            }

            function addSlide(target, style) {
                target.push(getSlide(target, style));
            };

            $scope.carouselIndex = 3;
            $scope.carouselIndex2 = 0;
            $scope.carouselIndex2 = 0;
            $scope.carouselIndex3 = 5;
            $scope.carouselIndex4 = 5;

            



	var workId = $routeParams.workId;
    $http.get('http://localhost/symfony/web/app_dev.php/api/work/'+workId).
        success(function(work) {
            Data.headerTitle=work.name;
            $scope.Data = Data;
            $scope.work = work;
            // console.log(" $scope.work");
            // console.log( $scope.work);
        });

        //swipe
  $scope.showActions = false;
  $scope.someFunction = function(){
    $scope.showActions = !$scope.showActions;
  };
 }]);
