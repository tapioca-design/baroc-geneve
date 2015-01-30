var myApp = angular.module("myApp", 
	["ngRoute", "appControllers"]);

var appControllers = angular.module("appControllers", []);

myApp.config(["$routeProvider", function($routeProvider) {
	//console.log("myApp.config");
	$routeProvider.
	when("/concerts-list", {
		templateUrl: "views/concerts-list.html"
	}).
	when("/concerts-map", {
		templateUrl: "views/concerts-map.html"
	}).
	when("/places-list", {
		templateUrl: "views/places-list.html"
	}).
	otherwise({
		redirectTo: "/concerts-list"
	});
}]);


/*
var services = angular.module('guthub.services', ['ngResource']);
services.factory('Recipe', ['$resource', function($resource) {
var concerts = $resource(
	); 
console.log(concerts);
}]);
*/
console.log("init");
 myApp.controller('ConcertsListController', ['$scope','$http', function($scope,$http) {
      //$http.get('model/worksOrderedByFirstPerformance.json').
      $http.get('http://localhost/symfony/web/app_dev.php/api/city/1/worksOrderedByFirstPerformance').
        success(function(concerts) {
            console.log(concerts);
            $scope.concerts = concerts;
        });
 }]);



myApp.run(function($rootScope) {
	
	console.log("ANGULAR DEBUG");
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


  