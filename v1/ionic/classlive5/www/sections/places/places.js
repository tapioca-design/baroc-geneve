starter.controller('PlacesCtrl', ['$rootScope','$scope','$http','Data','Search','Const', function($rootScope, $scope,$http, Data, Search, Const) {
  $rootScope.d("PlacesCtrl");
  Data.loadingActive = 1;
          $scope.Data = Data;
          $rootScope.getData("city/1/places", "",
          function (callback_arg) {
            Data.loadingActive = 0;
              $scope.places = callback_arg;
          });
 }]);
