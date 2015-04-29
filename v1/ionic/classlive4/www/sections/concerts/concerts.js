starter.controller('ConcertsCtrl', ['$rootScope' ,'$scope','$state', 'Data','API', function($rootScope, $scope, $state, Data, API) {
$rootScope.d("ConcertsCtrl");
      Data.loadingActive = 1;
      Data.concertsNoResultAllowed = 0;
      $scope.Data = Data;




  // $rootScope.getData("city/1/worksOrderedByFirstPerformance", "",
  //     function (callback_arg) {
  //         var concerts = callback_arg;
  //         Data.loadingActive = 0;
  //         $scope.concerts = concerts;
          
  //     });


        API.worksOrderedByFirstPerformance()
            .success(function (concerts) {
                $scope.concerts = concerts;
            })
            .error(function (error) {
                $rootScope.bug('Unable to load customer data: ' + error.message);
            });
    







  $scope.data = {};
  $scope.clearSearch = function() {
    $rootScope.d("clearSearch");
    $scope.data.searchQuery = '';
  };
}]);
