myApp.controller('ConcertsListController', ['$rootScope','$scope','$http', "$routeParams",'$location','Data','Search','Const', function($rootScope,$scope,$http,$routeParams,$location, Data, Search, Const) { 


      Data.loadingActive = 1;
      Data.concertsNoResultAllowed = 0;
      Data.headerTitle=Const.appNameFr;
      $scope.Data = Data;
      $scope.Search = Search;








$rootScope.getData("city/1/worksOrderedByFirstPerformance", "",
function (callback_arg) {
    var concerts = callback_arg;
    Data.loadingActive = 0;
    $scope.Data = Data;
    $scope.concerts = concerts;
});


      // if (localStorage.getItem("city/1/worksOrderedByFirstPerformance") === null) {
      //     console.log("city/1/worksOrderedByFirstPerformance not in lStor");
      //     $http.get(Const.baseUrl+'/symfony/web/api/city/1/worksOrderedByFirstPerformance').
      //       success(function(concerts) {
      //           $scope.concerts = concerts;
      //           localStorage.setItem('city/1/worksOrderedByFirstPerformance', JSON.stringify(concerts));
      //           //should be loadede and display after a few time, so allow no result 
      //           Data.loadingActive = 0;
      //           // console.log(Data.loadingActive);
      //           setTimeout(function(){ Data.concertsNoResultAllowed = 1; }, 2000);
      //     }).
      //     error(function(data, status, headers, config) {
      //         alert("Concerts list http error: "+status);
      //     });
      // } else {
      //   console.log("city/1/worksOrderedByFirstPerformance is there locally !!");
      //   var worksOrderedByFirstPerformance = localStorage.getItem("city/1/worksOrderedByFirstPerformance");
      //   $scope.concerts = JSON.parse(worksOrderedByFirstPerformance);
        
      // }









      $scope.searchActiveToggle = function() {
          Data.searchActive = !Data.searchActive;
          $scope.searchActive = Data.searchActive;
          // console.log("searchActive"+$scope.searchActive);
      };
 }]);
/***********************************************************************************************/
/***********************************************************************************************/
/***********************************************************************************************/
/***********************************************************************************************/
/***********************************************************************************************/
/***********************************************************************************************/
myApp.controller('ConcertController', ['$rootScope','$scope','$http', '$location','$routeParams','Data','Search','Const', function($rootScope,$scope,$http, $location, $routeParams, Data, Search, Const) {

$scope.colors = ["#fc0003", "#f70008", "#f2000d", "#ed0012", "#e80017", "#e3001c", "#de0021", "#d90026", "#d4002b", "#cf0030", "#c90036", "#c4003b", "#bf0040", "#ba0045", "#b5004a", "#b0004f", "#ab0054", "#a60059", "#a1005e", "#9c0063", "#960069", "#91006e", "#8c0073", "#870078", "#82007d", "#7d0082", "#780087", "#73008c", "#6e0091", "#690096", "#63009c", "#5e00a1", "#5900a6", "#5400ab", "#4f00b0", "#4a00b5", "#4500ba", "#4000bf", "#3b00c4", "#3600c9", "#3000cf", "#2b00d4", "#2600d9", "#2100de", "#1c00e3", "#1700e8", "#1200ed", "#0d00f2", "#0800f7", "#0300fc"];

$scope.Const = Const;
            
            $scope.path = function ( path ) {
              // console.log("path="+path);
              $location.url(path);
              
            };
            $scope.absolute = function ( path ) {
              //$location.path(path);
              window.open(path);
            };
            /***************** carousel ********************************************************************************************************************************************************************************************/
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
            // $scope.carouselIndex2 = 1;
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
            /**********************************************************************************************************************************************************************************/
	var workId = $routeParams.workId;


$rootScope.getData("work/"+workId, "works",
function (callback_arg) {
    var work = callback_arg;
    Data.headerTitle=work.name;
    $scope.Data = Data;
    $scope.work = work;
});

$rootScope.getData('work/'+workId+'/performances', "works",
function (callback_arg) {
    var performances = callback_arg;
    $scope.Data = Data;
    $scope.performances = performances;
});


        //swipe
  $scope.showActions = false;
  $scope.someFunction = function(){
    $scope.showActions = !$scope.showActions;
  };
 }]);