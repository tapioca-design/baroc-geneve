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
    Data.concertsNoResultAllowed = 0;
	var placeId = $routeParams.placeId;

    $http.get(Const.baseUrl+'/symfony/web/api/place/'+placeId).
        success(function(place) {
          Data.headerTitle=place.name_fr;
            $scope.Data = Data;
            $scope.place = place;

        }).error(function(data, status, headers, config) {
            //no place found
        });

        /*********** concerts in this place ***********/
            $http.get(Const.baseUrl+'/symfony/web/api/place/'+placeId+'/performancesGroupedByWork').
            success(function(performances) {
                
                // if () {

                // }
                $scope.performances = performances;
                Data.loadingActive = 0;
                Data.concertsNoResultAllowed = 1;

                // console.log("Data.loadingActive");
                // console.log(Data.loadingActive);
                // console.log("Data.concertsNoResultAllowed");
                // console.log(Data.concertsNoResultAllowed);

            }).error(function(data, status, headers, config) {
                // console.log("NOTHING");
                // Data.loadingActive = 0;
                // Data.concertsNoResultAllowed = 1;
              });

  //   $scope.telephone = function(telephone){
  //   	var link = "tel:"+ telephone; 
  //   	window.location.href = link;
 	// };
 	// $scope.email = function(email){
 	// 	//console.log("EMAILLLL");
  //   	var link = "mailto:"+ email; 
  //   	window.location.href = link;
 	// };
    




 }]);
