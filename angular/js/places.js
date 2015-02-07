myApp.controller('PlacesListController', ['$rootScope','$scope','$http','Data','Search', function($rootScope, $scope,$http, Data, Search) {
      Data.headerTitle="Classical live Genève";
            $scope.Data = Data;
      $http.get('http://localhost/symfony/web/app_dev.php/api/city/1/places').
        success(function(places) {
            $scope.places = places;
        });
 }]);

myApp.controller('PlaceController', ['$rootScope','$scope','$http', '$routeParams','Data','Search', function($rootScope, $scope,$http, $routeParams, Data, Search) {
	console.log("PC $rootScope.header_title_over = "+$rootScope.header_title_over);
    
	var placeId = $routeParams.placeId;
    $http.get('http://localhost/symfony/web/app_dev.php/api/place/'+placeId).
        success(function(place) {

          Data.headerTitle=place.name_fr;
            $scope.Data = Data;


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
