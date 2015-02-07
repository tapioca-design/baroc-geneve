var myApp = angular.module("myApp", 
	["ngRoute", "ngTouch","ngAnimate", "appControllers"]);

var appControllers = angular.module("appControllers", []);




// myApp.config(["$routeProvider", function($routeProvider) {
//   $routeProvider.
//   when("/", {
//     templateUrl: "views/concerts-list.html",
//     controller:"ConcertsListController"
//   }).
//   otherwise({
//     redirectTo: "/"
//   });
//   }]);

  //   myApp.factory('Data', function () {
  //     return { FirstName: '', sergtfgg: '', rdtghe: '', jwshtsjh: '', hrdthr: '', jdrhrdth: '' };
  // });

 






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
/***********************************************************************************************/

myApp.factory('Data', function(){
  //{ headerTitle: '', searchTerm:"",  filteredConcerts:"", searchAllowed:1, searchActive:0};
    var Data =
        {
            headerTitle: '', searchTerm:"",  filteredConcerts:"", searchAllowed:1, searchActive:0
        };
    return {
        getHeaderTitle: function () {
            console.log("getHeaderTitle = "+Data.headerTitle);
            return Data.headerTitle;
        },
        setHeaderTitle: function (v) {
            Data.headerTitle = v;
        },
        getSearchTerm: function () {
            return Data.searchTerm;
        },
        setSearchTerm: function (v) {
            Data.searchTerm = v;
        },
        getFilteredConcerts: function () {
            return Data.filteredConcerts;
        },
        setFilteredConcerts: function (v) {
            Data.filteredConcerts = v;
        },
        getSearchAllowed: function () {
            return Data.searchAllowed;
        },
        setSearchAllowed: function (v) {
            Data.searchAllowed = v;
        },
        getSearchActive: function () {
            return Data.searchActive;
        },
        setSearchActive: function (v) {
            Data.searchActive = v;
        }
    };
});

/***********************************************************************************************/

myApp.controller('HeaderController', ['$rootScope','$scope','$http',"$route", '$location','Data', function($rootScope, $scope, $http, $route, $location, Data) {


      $scope.Data = Data;
            


      $scope.searchAllowed = Data.searchAllowed;
      $scope.searchActive = Data.searchActive;

       $scope.back={};
      $scope.$on('$routeChangeStart', function(event, next, current) {
              Data.searchTerm = "";

             if (next && next.$$route && next.$$route.controller) {
                var viewController = next.$$route.controller;
             } else {
                var viewController = "";
             }
              
              console.log("viewController "+viewController)
              
              if (viewController=="ConcertsListController" || viewController=="PlacesListController")  {
                  $scope.searchAllowed=1;
              } else if (viewController=="ConcertController")  {
                  $scope.searchAllowed=0;
                  $scope.searchActive = 0;
                  $scope.back.url = "#/concerts-list";
              } else if (viewController=="PlaceController")  {
                  $scope.searchAllowed=0;
                  $scope.searchActive = 0;
                  $scope.back.url = "#/places-list";
              } else {
                  console.log("NO ROUTE SUPPOSED TO END UP HERE !!!");
                  $scope.searchAllowed=1;

              }
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


/***********************************************************************************************/
myApp.controller('ConcertsListController', ['$rootScope','$scope','$http', "$routeParams",'Data', function($rootScope,$scope,$http, $routeParams, Data) { 

      // $scope.retreiveHeaderTitle = function () {
      //   return "OilaConcLiiiiist";
      // }


      Data.headerTitle="Classic live Genève";
      $scope.Data = Data;

      
      // console.log("Data.headerTitleConcertsList");
      // console.log(Data.headerTitle);

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
myApp.controller('ConcertController', ['$rootScope','$scope','$http', '$routeParams','Data', function($rootScope,$scope,$http, $routeParams, Data) {
	var workId = $routeParams.workId;
    $http.get('http://localhost/symfony/web/app_dev.php/api/work/'+workId).
        success(function(work) {

            Data.headerTitle=work.name;
            $scope.Data = Data;
            // $scope.headerTitle = Data.getHeaderTitle();
            // $rootScope.$watch('Data.headerTitle', function () {
            //     console.log("from CONCERT ctrl headerTitle has changed: "+Data.getHeaderTitle()); 
            //     $scope.headerTitle = Data.getHeaderTitle();
            // });


            $scope.work = work;

        });

        //swipe
  $scope.showActions = false;
  $scope.someFunction = function(){
    $scope.showActions = !$scope.showActions;
  };
 }]);

/***********************************************************************************************/
myApp.controller('PlacesListController', ['$rootScope','$scope','$http','Data', function($rootScope, $scope,$http, Data) {
      Data.headerTitle="Classical live Genève";
            $scope.Data = Data;
      $http.get('http://localhost/symfony/web/app_dev.php/api/city/1/places').
        success(function(places) {
            $scope.places = places;
        });
 }]);
/***********************************************************************************************/

myApp.controller('PlaceController', ['$rootScope','$scope','$http', '$routeParams','Data', function($rootScope, $scope,$http, $routeParams, Data) {
	console.log("PC $rootScope.header_title_over = "+$rootScope.header_title_over);
    
	var placeId = $routeParams.placeId;
    $http.get('http://localhost/symfony/web/app_dev.php/api/place/'+placeId).
        success(function(place) {

          Data.headerTitle=place.name_fr;
            $scope.Data = Data;
          // $scope.headerTitle = Data.getHeaderTitle();
          // $rootScope.$watch('Data.headerTitle', function () {
          //     console.log("from PLACE ctrl headerTitle has changed: "+Data.getHeaderTitle());
          //     $scope.headerTitle = Data.getHeaderTitle();
          // });


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

/***********************************************************************************************/


// myApp.controller('FooterController', ['$rootScope','$scope','$http',"$route", 'Data', function($rootScope, $scope, $http, $route, Data) {

//           Data.setHeaderTitle("PiedDePage");
//           // $scope.headerTitle = Data.getHeaderTitle();
//           // $rootScope.$watch('Data.headerTitle', function () {
//           //     console.log("from FOOTER ctrl headerTitle has changed: "+Data.getHeaderTitle());
//           //     $scope.headerTitle = Data.getHeaderTitle();
//           // });
// }]);
/***********************************************************************************************/


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


  