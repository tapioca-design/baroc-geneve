myApp.controller('HeaderController', ['$rootScope','$scope','$http',"$route", '$location','Data','Search', function($rootScope, $scope, $http, $route, $location, Data, Search) {

      $scope.Data = Data;
      $scope.Search = Search;

      $scope.searchAllowed = Data.searchAllowed;
      $scope.searchActive = Data.searchActive;

      $scope.back={};
      $scope.$on('$routeChangeStart', function(event, next, current) {

              Search.term = "";

             if (next && next.$$route && next.$$route.controller) {
                var viewController = next.$$route.controller;
             } else {
                var viewController = "";
             }
              
              console.log("viewController "+viewController)
              
              if (viewController=="ConcertsListController" || viewController=="PlacesListController")  {
                  $scope.searchAllowed=1;
              } else if (viewController=="ConcertController")  {
                  $scope.searchAllowed=0;
                  $scope.searchActive = 0;
                  $scope.back.url = "#/concerts-list";
              } else if (viewController=="PlaceController")  {
                  $scope.searchAllowed=0;
                  $scope.searchActive = 0;
                  $scope.back.url = "#/places-list";
              } else {
                  console.log("NO ROUTE SUPPOSED TO END UP HERE !!!");
                  $scope.searchAllowed=1;

              }
      });

      //$scope.Data = Data;
      $scope.searchActiveToggle = function() {
          Data.searchActive = !Data.searchActive;
          $scope.searchActive = Data.searchActive;
          
          //console.log("searchActive"+$scope.searchActive);
      };

      // $scope.$watch(Data, function(newValue, oldValue) {
      //     console.log("change!");
      // }, true);

}]);
