starter.controller('PlaceDetailCtrl', ['$rootScope','$scope','$http', '$stateParams','$state','Data','Search','Const', function($rootScope, $scope,$http, $stateParams, $state, Data, Search, Const) {

  $rootScope.d("PlaceDetailCtrl");
  
Data.loadingActive = 1;
          $scope.Data = Data;
          var stateUrlPrefix = $state.$current.url.prefix;
          var expl = stateUrlPrefix.split("/");
          var stateType = expl[2];
          $scope.stateType = stateType;

	var placeId = $stateParams.placeId;

    $rootScope.getData('place/'+placeId, "places",
    function (callback_arg) {
        var place = callback_arg;
        $scope.place = place;
    });
    $rootScope.getData('place/'+placeId+'/performancesGroupedByWork', "",
    function (callback_arg) {
        var performances = callback_arg;
        Data.loadingActive = 0;
        $scope.performances = performances;
    });
 }]);