starter.controller('ConcertDetailCtrl', ['$rootScope', '$scope', '$stateParams','$location','$state','Data','API','Links', function($rootScope, $scope, $stateParams,$location,$state, Data, API, Links) {

  $rootScope.d("ConcertDetailCtrl");

  Data.loadingActive = 1;
  $scope.Data = Data;
  var stateUrlPrefix = $state.$current.url.prefix;
  var expl = stateUrlPrefix.split("/");
  var stateType = expl[2];
  $scope.stateType = stateType;

  $scope.Links = Links;

  var workId = $stateParams.workId;

          // $rootScope.getData("work/"+workId, "works",
          // function (callback_arg) {
          //     var work = callback_arg;
          //     $scope.workTitle = work.name;
          //     $scope.work = work;
          // });
          // $rootScope.getData('work/'+workId+'/performances', "works",
          // function (callback_arg) {
          //     var performances = callback_arg;
          //     Data.loadingActive = 0;
          //     $scope.performances = performances;
          // });

API.work(workId)
.success(function (work) {
  $scope.workTitle = work.name;
  $scope.work = work;
})
.error(function (error) {
  $rootScope.bug('Unable to load data: ' + error.message);
});


API.workPerformances(workId)
.success(function (performances) {
  Data.loadingActive = 0;
  $scope.performances = performances;
})
.error(function (error) {
  $rootScope.bug('Unable to load data: ' + error.message);
});





}]);


