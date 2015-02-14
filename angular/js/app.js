var myApp = angular.module("myApp", 
	["ngRoute", "ngTouch","ngAnimate", "appControllers", 'angular-carousel']);

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
	when("/map", {
		templateUrl: "views/map.html",
		controller:"MapController"
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
	when("/place/:placeId/map", {
		templateUrl: "views/place-map.html",
		controller:"PlaceMapController"
	}).


	otherwise({
		redirectTo: "/concerts-list"
	});
}]);


// myApp.config(function(uiGmapGoogleMapApiProvider) {
//     uiGmapGoogleMapApiProvider.configure({
//         //    key: 'your api key',
//         v: '3.17',
//         libraries: 'weather,geometry,visualization'
//     });
// })


// myApp.controller('MapCtrl', function ($scope) {

    
// });




/***********************************************************************************************/
myApp.factory('Const', function($location){
    var baseUrlInner
    if ($location.host()=="tapiocadesign.com") {
    	baseUrlInner= "http://tapiocadesign.com/_CL";
    } else {
    	//locahost
    	baseUrlInner= "http://"+$location.host();
    }
    return {baseUrl:baseUrlInner, appNameFr:"Classique live Genève"};
});
myApp.factory('Data', function($location){
    return {
    	headerTitle: '', 
    	filteredConcerts:"", 
    	searchAllowed:1, 
    	searchActive:0
    };
});
myApp.factory('Search', function(){
    return {term: ''};
});
myApp.factory('Concert', function(){
    return {term: ''};
});



















/***********************************************************************************************/


// myApp.run(function($rootScope) {
// 	$rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
//   console.log('$stateChangeStart to '+toState.to+'- fired when the transition begins. toState,toParams : \n',toState, toParams);
// });
// $rootScope.$on('$stateChangeError',function(event, toState, toParams, fromState, fromParams){
//   console.log('$stateChangeError - fired when an error occurs during transition.');
//   console.log(arguments);
// });
// $rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
//   console.log('$stateChangeSuccess to '+toState.name+'- fired once the state transition is complete.');
// });
// $rootScope.$on('$viewContentLoaded',function(event){
//   console.log('$viewContentLoaded - fired after dom rendered',event);
// });
// $rootScope.$on('$stateNotFound',function(event, unfoundState, fromState, fromParams){
//   console.log('$stateNotFound '+unfoundState.to+'  - fired when a state cannot be found by its name.');
//   console.log(unfoundState, fromState, fromParams);
// });
// });


  