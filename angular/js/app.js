var myApp = angular.module("myApp", 
	["ngRoute", "appControllers"]);

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





/*
myApp.directive('headerSideBtnRight', function() {
  return {
      restrict: 'C',
      template: '<a href="#" class="white header-side-btn" header-side-btn-right><span class="glyphicon glyphicon-menu-hamburger red-dark"></span></a>'
  };
});
*/





myApp.factory('Data', function () {
    return { headerTitle: '' };
});

myApp.controller('ConcertsListController', ['$scope','$http', 'Data', function($scope,$http, Data) {
      Data.headerTitle = "Classical live Genève";
      $scope.Data = Data;
      $http.get('http://localhost/symfony/web/app_dev.php/api/city/1/worksOrderedByFirstPerformance').
        success(function(concerts) {
            $scope.concerts = concerts;
        });
 }]);


myApp.directive('headerSideBtnLeft', function() {
	return {
      	restrict: 'C',
      	template: '<a href="#/concerts-list" class="white header-side-btn " ><span class="glyphicon glyphicon-chevron-left red-dark"></span>Coco</a>'
  };
});


myApp.directive('headerSideBtnRight', function() {
  	return {
      	restrict: 'C',
      	template: '<a href="#" class="white header-side-btn" header-side-btn-right><span class="glyphicon glyphicon-menu-hamburger red-dark"></span></a>'
  };
});




myApp.controller('ConcertController', ['$scope','$http', '$routeParams','Data', function($scope,$http, $routeParams, Data) {
	var workId = $routeParams.workId;
    $http.get('http://localhost/symfony/web/app_dev.php/api/work/'+workId).
        success(function(work) {
        	Data.headerTitle = work.name;
            $scope.work = work;
        });
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

myApp.controller('HeaderController', ['$rootScope','$scope','$http','Data', function($rootScope, $scope,$http, Data) {
      $scope.Data = Data;
}]);




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


  