myApp.controller('PlacesListController', ['$rootScope','$scope','$http','Data','Search','Const', function($rootScope, $scope,$http, Data, Search, Const) {

    Data.loadingActive = 1;
      Data.headerTitle=Const.appNameFr;
       
       $scope.Data = Data;
       
      $http.get(Const.baseUrl+'/symfony/web/api/city/1/places').
        success(function(places) {
            
            $scope.places = places;
            Data.loadingActive = 0;
        });
 }]);




myApp.controller('PlaceController', ['$rootScope','$scope','$http', '$routeParams','Data','Search','Const', function($rootScope, $scope,$http, $routeParams, Data, Search, Const) {
	// console.log("PC $rootScope.header_title_over = "+$rootScope.header_title_over);
    Data.loadingActive = 1;
	var placeId = $routeParams.placeId;

    $http.get(Const.baseUrl+'/symfony/web/api/place/'+placeId).
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
    /*********** concerts in this place ***********/
    $http.get(Const.baseUrl+'/symfony/web/api/place/'+placeId+'/performancesGroupedByWork').
    success(function(performances) {
        // console.log("concerts");
        // console.log(concerts);
        $scope.performances = performances;
        Data.loadingActive = 0;
    });




 }]);
