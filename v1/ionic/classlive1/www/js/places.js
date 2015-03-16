starter.controller('PlacesCtrl', ['$rootScope','$scope','$http','Data','Search','Const', function($rootScope, $scope,$http, Data, Search, Const) {
          $rootScope.getData("city/1/places", "",
          function (callback_arg) {
          	// $rootScope.d("getData places");
              $scope.places = callback_arg;
          });
 }]);

starter.controller('PlaceDetailCtrl', ['$rootScope','$scope','$http', '$stateParams','Data','Search','Const', function($rootScope, $scope,$http, $stateParams, Data, Search, Const) {
	var placeId = $stateParams.placeId;
    $rootScope.getData('place/'+placeId, "places",
    function (callback_arg) {
        var place = callback_arg;
        $scope.place = place;
    });
    $rootScope.getData('place/'+placeId+'/performancesGroupedByWork', "",
    function (callback_arg) {
        var performances = callback_arg;
        $scope.performances = performances;
    });
 }]);