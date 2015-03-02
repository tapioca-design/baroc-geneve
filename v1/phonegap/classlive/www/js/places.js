myApp.controller('PlacesListController', ['$rootScope','$scope','$http','Data','Search','Const', function($rootScope, $scope,$http, Data, Search, Const) {

    Data.loadingActive = 1;
    
    Data.headerTitle=Const.appNameFr;
       
       $scope.Data = Data;
       $scope.Const = Const;

        if (localStorage.getItem("city/1/places") === null) {
          console.log("places not here");
          $http.get(Const.baseUrl+'/symfony/web/api/city/1/places').
            success(function(places) {
                localStorage.setItem('city/1/places', JSON.stringify(places));
                $scope.Data = Data;
                $scope.places = places;
                Data.loadingActive = 0; 
            });
          } else {
                console.log("places local:");
                var placesLS = localStorage.getItem('city/1/places');
                $scope.places = JSON.parse(placesLS);
                Data.loadingActive = 0; 
          }

 }]);


/***************************************************************************/


myApp.controller('PlaceController', ['$rootScope','$scope','$http', '$routeParams','Data','Search','Const', function($rootScope, $scope,$http, $routeParams, Data, Search, Const) {



    Data.loadingActive = 1;
    Data.concertsNoResultAllowed = 0;
	var placeId = $routeParams.placeId;



$rootScope.getData('place/'+placeId, "places",
function (callback_arg) {
    var place = callback_arg;
    Data.headerTitle=place.name_fr;
    Data.loadingActive = 0; 
    $scope.Data = Data;
    $scope.place = place;
});


        /*********** concerts in this place ***********/


$rootScope.getData('place/'+placeId+'/performancesGroupedByWork', "",
function (callback_arg) {
    var performances = callback_arg;
    Data.loadingActive = 0;  
    Data.concertsNoResultAllowed = 1;
    $scope.Data = Data;
    $scope.performances = performances;
});


 }]);
