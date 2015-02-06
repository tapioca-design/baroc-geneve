var myApp = angular.module("myApp", 
	["ngRoute", "ngTouch","ngAnimate", "appControllers"]);

var appControllers = angular.module("appControllers", []);

myApp.config(["$routeProvider", function($routeProvider) {
	//console.log("myApp.config");
	$routeProvider.
	when("/concerts-list", {
		templateUrl: "views/concerts-list.html",
		controller:"ConcertsListController"
	}).
	when("/concerts-map", {
		templateUrl: "views/concerts-map.html",
		controller:""
	}).
	when("/concert/:workId", {
		templateUrl: "views/concert.html",
		controller:"ConcertController"
	}).
	when("/places-list", {
		templateUrl: "views/places-list.html",
		controller:"PlacesListController"
	}).
	when("/place/:placeId", {
		templateUrl: "views/place.html",
		controller:"PlaceController"
	}).
	otherwise({
		redirectTo: "/concerts-list"
	});
}]);

myApp.factory('Data', function () {
    return { headerTitle: '', searchTerm:"",  filteredConcerts:"", searchAllowed:1, searchActive:0};
});

// app.directive('main', ['$rootScope','$location', function ($rootScope, $location) {
//    return {
//        restrict: 'E',
//        scope: false,
//        link: function postLink(scope, element, attrs) {
//            console.log('All directive elements execute this!');
//            $rootScope.$on('$routeChangeStart', function() {
//                console.log('ng-included elements work execute this!');
//            });
//        }
//     }
// }]);


// myApp.directive('headerSideBtnLeft', function() {
// 	return {
//       	restrict: 'C',
//       	template: '<a href="#/concerts-list" class="white header-side-btn " ><span class="glyphicon glyphicon-chevron-left red-dark"></span>Coco</a>'
//   };
// });

/*
myApp.directive('headerSideBtnRight', function() {
  	return {
      	restrict: 'C',
      	template: '<a href="#" class="white header-side-btn" header-side-btn-right><span class="glyphicon glyphicon-menu-hamburger red-dark"></span></a>'
  };
});
*/

myApp.controller('HeaderController', ['$rootScope','$scope','$http',"$route", '$location','Data', function($rootScope, $scope, $http, $route, $location, Data) {
      
      console.log("Data.headerTitle");
      console.log(Data.headerTitle);

      $scope.headerTitle = Data.headerTitle;

      //$scope.obj.val = "caca";
      $scope.searchAllowed = Data.searchAllowed;
      $scope.searchActive = Data.searchActive;
      //searchAllowed=1;
      // $scope.search={};
       $scope.back={};
      // $scope.search.visible = 1;
      // $scope.back.visible = 0;
      // $scope.searchShowHideToggleBoolean = 0;


      $scope.$on('$routeChangeStart', function(event, next, current) { 

          // console.log("Data.headerTitle");
          // console.log(Data.headerTitle);
          // console.log(Data.headerTitle.length);

          //empty search field
          Data.searchTerm = "";

          // var locationPath = $location.path();
          // console.log("locationPath");
          // console.log(locationPath);
          
              //console.log("location.path is not empty");
              //avoid bug on inital homepage, if locationPath is empty, it s homepage

          //if (current && current.$$route && current.$$route.controller) {
             if (next && next.$$route && next.$$route.controller) {
                var viewController = next.$$route.controller;
             } else {
                var viewController = "";
             }
              
              console.log("viewController "+viewController)
              
              if (viewController=="ConcertsListController" || viewController=="PlacesListController")  {
                  searchAllowed=1;
                  // $scope.search.visible = 1;
                  // $scope.back.visible = 0;
                  // $scope.searchShowHideToggleBoolean = 0;
              } else if (viewController=="ConcertController")  {
                  searchAllowed=0;
                  // $scope.search.visible = 0;
                  // $scope.back.visible = 1;
                  $scope.back.url = "#/concerts-list";
                  //after searchin, if a concert is selected, remove fieldsearch
                  //$scope.searchShowHideToggleBoolean = 0;
              } else if (viewController=="PlaceController")  {
                  searchAllowed=0;
                  // $scope.search.visible = 0;
                  // $scope.back.visible = 1;
                  $scope.back.url = "#/places-list";
                  //after searchin, if a place is selected, remove fieldsearch
                  //$scope.searchShowHideToggleBoolean = 0;
              } else {
                  console.log("NO ROUTE SUPPOSED TO END UP HERE !!!");
                  searchAllowed=1;
              }
          //}
      });

      //$scope.Data = Data;
      $scope.searchActiveToggle = function() {
          Data.searchActive = !Data.searchActive;
          $scope.searchActive = Data.searchActive;
          console.log("searchActive"+$scope.searchActive);
      };

      // $scope.$watch(Data, function(newValue, oldValue) {
      //     console.log("change!");
      // }, true);
}]);
















myApp.controller('ConcertsListController', ['$scope','$http', "$routeParams",'Data', function($scope,$http, $routeParams, Data) {

    // console.log("filteredConcerts");
    // console.log(filteredConcerts);
    //avoid no result displaying before json concerts
    //$scope.noresult = {visible:0};

    // if (Data.searchTerm=="") {
    //     //search field empty, no reason to show "no result"

    // }

    //if Data.headerTitle is empty, 

      // console.log("routeParams");
      // console.log($routeParams);
      Data.headerTitle = "Classical live Genève";
      // console.log("Data.headerTitleConcertsList");
      // console.log(Data.headerTitle);


      $scope.search=Data;
      //$scope.Data = Data;
      $http.get('http://localhost/symfony/web/app_dev.php/api/city/1/worksOrderedByFirstPerformance').
        success(function(concerts) {
            $scope.concerts = concerts;

            //concerts is now an array, so display no result with no fear, will be well handled
            //$scope.noresult.visible = 0;

            // $scope.$watch(function () {
            //     $scope.filteredItems = $scope.$eval("items | orderBy:'order_prop' | filter:query | limitTo:4");
            // });
             
            // //once concerts are downloaded, watch for their length
            // $scope.$watch("Data.searchTerm", function(newValue, oldValue) {
             
            //  console.log("$scope.filteredItems");
            //  console.log($scope.filteredItems);

            //      if (newValue=="") {
            //         //search empty
            //         $scope.noresult.visible=0;
            //      } else {
            //         //if search typed
            //         //console.log($scope.filteredConcerts.length);
            //      }
            // });
      });

      // function isNoResultVisible () {
      //     console.log("Data.searchTerm-"+Data.searchTerm);
      // }
      // isNoResultVisible ();

      //$scope.searchTerm = Data.searchTerm;

      // console.log("Data.searchTerm");
      // console.log(Data.searchTerm);

      //Data.stateSearch = 0
      /*
      $scope.stateSearchToggle = function() {
          Data.stateSearch = !Data.stateSearch;
      };
      */

 }]);






myApp.controller('ConcertController', ['$scope','$http', '$routeParams','Data', function($scope,$http, $routeParams, Data) {
	var workId = $routeParams.workId;
    $http.get('http://localhost/symfony/web/app_dev.php/api/work/'+workId).
        success(function(work) {
        	Data.headerTitle = work.name;
            $scope.work = work;
        });

        //swipe
  $scope.showActions = false;
  $scope.someFunction = function(){
    $scope.showActions = !$scope.showActions;
  };
 }]);

myApp.controller('PlacesListController', ['$rootScope','$scope','$http','Data', function($rootScope, $scope,$http, Data) {
      Data.headerTitle = "Classical live Genève";
      $http.get('http://localhost/symfony/web/app_dev.php/api/city/1/places').
        success(function(places) {
            $scope.places = places;
        });
 }]);




myApp.controller('PlaceController', ['$rootScope','$scope','$http', '$routeParams','Data', function($rootScope, $scope,$http, $routeParams, Data) {
	console.log("PC $rootScope.header_title_over = "+$rootScope.header_title_over);
    
	var placeId = $routeParams.placeId;
    $http.get('http://localhost/symfony/web/app_dev.php/api/place/'+placeId).
        success(function(place) {
        	Data.headerTitle = place.name_fr;
            $scope.place = place;
        });

    $scope.telephone = function(telephone){
    	var link = "tel:"+ telephone; 
    	window.location.href = link;
 	};
 	$scope.email = function(email){
 		//console.log("EMAILLLL");
    	var link = "mailto:"+ email; 
    	window.location.href = link;
 	};
 }]);



// myApp.controller('FooterController', ['$rootScope','$scope','$http',"$route", 'Data', function($rootScope, $scope, $http, $route, Data) {
//       $scope.$on('$routeChangeStart', function(next, current) { 

//           var currentViewController = current.$$route.controller;
//           // console.log("currentViewController");
//           // console.log(currentViewController);
//            $scope.listBtn={};
//            $scope.mapBtn={};
//            $scope.Btn={};
           
//           if (currentViewController=="ConcertsListController" || currentViewController=="PlacesListController")  {
//               $scope.search.visible = 1;
//               $scope.back.visible = 0;
//           } else if (currentViewController=="ConcertController")  {
//               $scope.search.visible = 0;
//               $scope.back.visible = 1;
//               $scope.back.url = "#/concerts-list";
//           } else if (currentViewController=="PlaceController")  {
//               $scope.search.visible = 0;
//               $scope.back.visible = 1;
//               $scope.back.url = "#/places-list";
//           } else {
//               $scope.search.visible = 1;
//               $scope.back.visible = 0;
//           }
//       });

//       $scope.Data = Data;
//       $scope.searchShowHideToggle = function() {
//           $scope.searchShowHideToggleBoolean = !$scope.searchShowHideToggleBoolean;
          
//       };
// }]);


myApp.run(function($rootScope) {
	//console.log("ANGULAR DEBUG");
	$rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
  console.log('$stateChangeStart to '+toState.to+'- fired when the transition begins. toState,toParams : \n',toState, toParams);
});
$rootScope.$on('$stateChangeError',function(event, toState, toParams, fromState, fromParams){
  console.log('$stateChangeError - fired when an error occurs during transition.');
  console.log(arguments);
});
$rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
  console.log('$stateChangeSuccess to '+toState.name+'- fired once the state transition is complete.');
});
// $rootScope.$on('$viewContentLoading',function(event, viewConfig){
//   // runs on individual scopes, so putting it in "run" doesn't work.
//   console.log('$viewContentLoading - view begins loading - dom not rendered',viewConfig);
// });
$rootScope.$on('$viewContentLoaded',function(event){
  console.log('$viewContentLoaded - fired after dom rendered',event);
});
$rootScope.$on('$stateNotFound',function(event, unfoundState, fromState, fromParams){
  console.log('$stateNotFound '+unfoundState.to+'  - fired when a state cannot be found by its name.');
  console.log(unfoundState, fromState, fromParams);
});
});


  