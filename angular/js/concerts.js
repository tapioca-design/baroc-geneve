myApp.controller('ConcertsListController', ['$rootScope','$scope','$http','$location', "$routeParams",'Data','Search', function($rootScope,$scope,$http,$location, $routeParams, Data, Search) { 

      Data.headerTitle="Classic live Genève";
      $scope.Data = Data;
      $scope.Search = Search;
      // var domain = 
      // console.log($location.host());
      $http.get('http://localhost/symfony/web/app.php/api/city/1/worksOrderedByFirstPerformance').
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
myApp.controller('ConcertController', ['$rootScope','$scope','$http', '$location','$routeParams','Data','Search', function($rootScope,$scope,$http, $location, $routeParams, Data, Search) {

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
            $scope.carouselIndex2 = 1;
            $scope.carouselIndex3 = 5;
            $scope.carouselIndex4 = 5;

            function addSlides(target, style, qty) {
                for (var i=0; i < qty; i++) {
                    addSlide(target, style);
                }
            }

            // 1st ngRepeat demo
            $scope.slides = [];
            addSlides($scope.slides, 'sports', 50);

            // 2nd ngRepeat demo
            $scope.slides2 = [];
            addSlides($scope.slides2, 'sports', 10);

            // 3rd ngRepeat demo
            $scope.slides3 = [];
            addSlides($scope.slides3, 'people', 50);

            // 4th ngRepeat demo
            $scope.slides4 = [];
            addSlides($scope.slides4, 'city', 50);


            // 5th ngRepeat demo
            $scope.slides6 = [];
            $scope.carouselIndex6 = 0;
            addSlides($scope.slides6, 'sports', 10);
            $scope.addSlide = function(at) {
                if(at==='head') {
                    $scope.slides6.unshift(getSlide($scope.slides6, 'people'));
                } else {
                    $scope.slides6.push(getSlide($scope.slides6, 'people'));
                }
            }


$scope.clickWebsite = function($scope, $location) {
     console.log("clickWebsite");
     //$location.path('www.france2.fr');
      //$scope.$apply(function() { $location.path("http://www.france2.fr"); });

  }
$scope.clickPlace = function($scope, $location, placeId) {
     console.log("clickPlace "+placeId);
     //$location.path('www.france3.fr');
     
  }

	var workId = $routeParams.workId;
    $http.get('http://localhost/symfony/web/app.php/api/work/'+workId).
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
