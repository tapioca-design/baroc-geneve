angular.module('starter.controllers', [])

.controller('ConcertsCtrl', function($scope, Concerts) {
  $scope.concerts = Concerts.all();
  $scope.remove = function(concert) {
    Concerts.remove(concert);
  }
})

.controller('ConcertDetailCtrl', function($scope, $stateParams, Concerts) {
  $scope.concert = Concerts.get($stateParams.concertId);
})

.controller('MapCtrl', function($scope) {})

.controller('PlacesCtrl', function($scope) {});