var myApp = angular.module("myApp", 
	["ngRoute", "ngTouch","ngAnimate", "appControllers", 'angular-carousel']);

var appControllers = angular.module("appControllers", []);


myApp.config(["$routeProvider","$locationProvider", function($routeProvider, $locationProvider) {
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
	// when("/performance/:performanceId/tickets", {
	// 	templateUrl: "views/tickets.html",
	// 	controller:"TicketsController"
	// }).
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



myApp.run(function ($rootScope, $location,$http,Const,Data,Navigation) {
    var history = [];
    $rootScope.$on('$routeChangeSuccess', function() {
        history.push($location.$$path);
    });

    // alert("myApp.run");

    $rootScope.isThereConnection = function() {
        // document.addEventListener("deviceready", onDeviceReady, false);
        // function onDeviceReady() {
            // alert("isThereConnection - navigator.network.connection.type: "+navigator.network.connection.type);
            if(navigator.network.connection.type == Connection.NONE){
                // alert("nocon");
                return false;
            }else{
                // alert("yescon");
                return true;
            }
        // }
    };
	$rootScope.getImagePath = function (object,folder,name_url,filename,callback) {
                alert("getImagePath");
                var localImagesPath = "img/";
                var serverImagesPath = Const.baseUrl+"/symfony/web/bundles/tapiocadesignclasslivegnv/images/";
                //works landscape suffix
                    var pathSuffix = folder+"/"+name_url+"/"+filename;
                    //if img exist locally, load it, otherwise get in on server
                    // serverPath
                    var localImage = localImagesPath+pathSuffix;
                    var distantImage = serverImagesPath+pathSuffix;
                    $http.get(localImage).success(function(data, status, headers, config) {
                        //img exists locally
                        object.landscapeBkgPath = localImage;
                        callback(object);
                         // localImage;
                    }).error(function(data, status, headers, config) {
                        //img does not exist locally, load the distant one
                         object.landscapeBkgPath = distantImage;
                        callback(object);
                    });
            };
    $rootScope.getData = function (url_suffix,folder,callback) {
        if (localStorage.getItem(url_suffix) === null) {
            alert("getData: data don t exist locally");
            // console.log("data doesn t exist locally");
            $http.get(Const.baseUrl+'/symfony/web/api/'+url_suffix).
            success(function(data) {
                alert("http get success");
                localStorage.setItem(url_suffix, JSON.stringify(data));
                //if no need to add landscape img to data, skip
                if (folder!="") {
                	$rootScope.getImagePath(data,folder,data.name_url,"landscape.jpg",
                    function (glbkgp_callback_arg) {
                        alert("getImagePath callback");
                        callback(glbkgp_callback_arg);
                        // $scope.place = glbkgp_callback_arg;
                	});
                } else {
                    alert("callback(data)");
                	callback(data);
                }
                
                
            }).
              error(function(data, status, headers, config) {
                    alert("getData http error, data: "+data+" status:"+status+" headers:"+headers+" config:"+config);
              });
          } else {
                alert("getData: data exists locally");
                // console.log("data exist in local storage");
                var data = localStorage.getItem(url_suffix);
                data = JSON.parse(data);
                if (folder!="") {
                	$rootScope.getImagePath(data,folder,data.name_url,"landscape.jpg",
                    function (glbkgp_callback_arg) {
                        alert("getImagePath callback");
                        callback(glbkgp_callback_arg);
                        // $scope.place = glbkgp_callback_arg;
                	});
                } else {
                    alert("callback(data)");
                	callback(data);
                }

          }
	}
	$rootScope.setFooterNavSelected = function (concertsStatus, mapStatus, placesStatus) {
		Navigation.concerts = concertsStatus;
    	Navigation.map = mapStatus;
    	Navigation.places = placesStatus;
	}
});



/***********************************************************************************************/
myApp.factory('Const', function($location){
    var baseUrlInner
    // if ($location.host()=="tapiocadesign.com") {
    // 	baseUrlInner= "http://tapiocadesign.com/_CLASSLIVE/v1";
    // } else {
    // 	//locahost
    // 	baseUrlInner= "http://"+$location.host()+"/v1";
    // }
    baseUrlInner= "http://tapiocadesign.com/_CLASSLIVE/v1";
    return {
    	baseUrl:baseUrlInner, 
    	url:baseUrlInner+"/angular-static/",
    	appNameFr:"Classique live Genève"
    };
});
myApp.factory('Data', function($location){
    return {
    	headerTitle: '', 
    	filteredConcerts:"", 
    	searchAllowed:1, 
    	searchActive:0,
    	concertsNoResultAllowed:0,
    	loadingActive:1,
    };
});
myApp.factory('Navigation', function(){
    return {
    	concerts:"off", 
    	map:"off", 
    	places:"off",
    };
});
myApp.factory('Search', function(){
    return {term: ''};
});
myApp.factory('Concert', function(){
    return {term: ''};
});



/*****************************************/
myApp.directive('fallbackSrc', function() {
        return {
            restrict: 'A',
            link: function(scope, element, attr) {
                element.on('error', function() {
                    element[0].src = attr.fallbackSrc;
                });
            }
        };
    })

// myApp.directive('srcBkg', function($http, Const) {
//         return {
//             restrict: 'A',
//             link: function(scope, element, attr) {

//             		var bkgDesired = attr.srcBkg;
//             		console.log("bkgDesired"+bkgDesired);
//             		var localBkg = "images/"+bkgDesired;
//             		var serverBkg = Const.baseUrlInner+"/symfony/web/bundles/tapiocadesignclasslivegnv/images/"+bkgDesired;
            		

//                 	$http.get(localBkg).
//                     success(function(data, status, headers, config) {
//                         //img exists locally
// 						alert("bkg ok");
//                         $scope.landscapeValidUrl = localBkg;
//                     }).
//                     error(function(data, status, headers, config) {
//                         //img does not exist locally, load the distant one
//                        	alert("bkg 404");
//                         $scope.landscapeValidUrl = serverBkg;
//                     });
//             }
//         };
//     })

















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


  