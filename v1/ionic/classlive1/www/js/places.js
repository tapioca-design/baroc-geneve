starter.controller('PlacesCtrl', ['$rootScope','$scope','$http','Data','Search','Const', function($rootScope, $scope,$http, Data, Search, Const) {
          $rootScope.getData("city/1/places", "",
          function (callback_arg) {
          	// $rootScope.d("getData places");
              $scope.places = callback_arg;
          });
 }]);

starter.controller('PlaceDetailCtrl', ['$rootScope','$scope','$http', '$stateParams','$state','Data','Search','Const', function($rootScope, $scope,$http, $stateParams, $state, Data, Search, Const) {


//every tabs point to rrot list of elements: concetts and places, would be concert detail or place detail, we can switch with those two infinitly, but this has to be done inside a line from a starting point: concerts list, or places list, stateType defines this.
          // $scope.stateType = $rootScope.getState($state.$current.url.prefix);
          var stateUrlPrefix = $state.$current.url.prefix;
          var expl = stateUrlPrefix.split("/");
          var stateType = expl[2];
          // $rootScope.d(stateType);
          $scope.stateType = stateType;


	var placeId = $stateParams.placeId;
  // $rootScope.d("placeId:"+placeId);

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