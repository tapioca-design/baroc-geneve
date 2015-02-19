myApp.controller('HeaderController', ['$rootScope','$scope','$http',"$route", '$location','$routeParams','$route','Data','Search','Const', function($rootScope, $scope, $http, $route, $location, $routeParams,$route, Data, Search, Const) {
      





      $scope.back = function () {
      console.log("backkkkk from header");
        // var prevUrl = history.length > 1 ? history.splice(-2)[0] : "/";
        // $location.path(prevUrl);
    };




      // Const.domainName = "http://"+$location.host();
      // $scope.Const = Const;
      // Const.domainName = "httpttt";

      $scope.Data = Data;
      $scope.Search = Search;
      $scope.Const = Const;

      $scope.searchAllowed = Data.searchAllowed;
      $scope.searchActive = Data.searchActive;

      $scope.back={};

      $scope.back.url = ""
      $rootScope.$on('$locationChangeStart',function(evt, absNewUrl, absOldUrl) {
                  // console.log('start', evt, absNewUrl, absOldUrl);
                  $scope.back.url = absOldUrl;
              });
      $rootScope.$on('$locationChangeSuccess',function(evt, absNewUrl, absOldUrl) {
                  // console.log('success', evt, absNewUrl, absOldUrl);
                  $scope.back.url = absOldUrl;
              });



      $scope.$on('$routeChangeStart', function(event, next, current) {

              // console.log("$location.url()");
              // console.log($location.url());

              $rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from, fromParams) {

                 // $state.href(from, fromParams)

              });
              Search.term = "";

             if (next && next.$$route && next.$$route.controller) {
                var viewController = next.$$route.controller;
             } else {
                var viewController = "";
             }
              
              
              
              
              








              if (viewController=="ConcertsListController" || viewController=="PlacesListController")  {
                  $scope.searchAllowed=1;
              } else if (viewController=="ConcertController")  {
                  $scope.searchAllowed=0;
                  $scope.searchActive = 0;
              } else if (viewController=="PlaceController")  {
                  $scope.searchAllowed=0;
                  $scope.searchActive = 0;
              } else if (viewController=="MapController")  {
                  $scope.searchAllowed=1;
                  $scope.searchActive = 0;
                  
              } else if (viewController=="PlaceMapController")  {
                  $scope.searchAllowed=0;
                  $scope.searchActive = 0;
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
