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
    $rootScope.d=function(t){
        // alert(t);
        console.log(t);
    }
    /******** load data when anular runs, and store everything in local storage ******/

    
    /**************/


    $rootScope.history = [];
    $rootScope.$on('$routeChangeSuccess', function() {
        $rootScope.history.push($location.$$path);
    });
    
    $rootScope.isThereConnection = function() {
        // document.addEventListener("deviceready", onDeviceReady, false);
        // function onDeviceReady() {
            // $rootScope.d("isThereConnection - navigator.network.connection.type: "+navigator.network.connection.type);
            if(navigator.network.connection.type == Connection.NONE){
                // $rootScope.d("nocon");
                return false;
            }else{
                // $rootScope.d("yescon");
                return true;
            }
        // }
    };
	$rootScope.getImagePath = function (object,folder,name_url,filename,callback) {
                // $rootScope.d("getImagePath");
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
        //check if internet




        //check if server last update not after the local one


        if (localStorage.getItem(url_suffix) === null) {
            // $rootScope.d("getData: data don t exist locally");
            // console.log("data doesn t exist locally");
            $http.get(Const.baseUrl+'/symfony/web/api/'+url_suffix).
            success(function(data) {
                // $rootScope.d("http get success");
                localStorage.setItem(url_suffix, JSON.stringify(data));
                //if no need to add landscape img to data, skip
                if (folder!="") {
                	$rootScope.getImagePath(data,folder,data.name_url,"landscape.jpg",
                    function (glbkgp_callback_arg) {
                        
                        callback(glbkgp_callback_arg);
                        // $scope.place = glbkgp_callback_arg;
                	});
                } else {
                    // $rootScope.d("callback(data)");
                	callback(data);
                }
                
                
            }).
              error(function(data, status, headers, config) {
                    alert("getData http error, data: "+data+" status:"+status+" headers:"+headers+" config:"+config);
              });
          } else {
                // $rootScope.d("getData: data exists locally");
                // console.log("data exist in local storage");
                var data = localStorage.getItem(url_suffix);
                data = JSON.parse(data);
                if (folder!="") {
                	$rootScope.getImagePath(data,folder,data.name_url,"landscape.jpg",
                    function (glbkgp_callback_arg) {
                        // $rootScope.d("getImagePath callback");
                        callback(glbkgp_callback_arg);
                        // $scope.place = glbkgp_callback_arg;
                	});
                } else {
                    // $rootScope.d("callback(data)");
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
    var baseUrlInner;
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