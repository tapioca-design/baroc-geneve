myApp.controller('HeaderController', ['$rootScope','$scope','$http',"$route", '$location','$routeParams','$route','Data','Search','Const', function($rootScope, $scope, $http, $route, $location, $routeParams,$route, Data, Search, Const) {




      
      $scope.backToPreviousUrl = function () {
      // console.log("backkkkk from header");
        var prevUrl = $rootScope.history.length > 1 ? $rootScope.history.splice(-2)[0] : "/";
        $location.path(prevUrl);
    };

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
              
              if (viewController=="ConcertsListController")  {
                  $scope.headerSideBtnLeftActive = 1;
                  $scope.searchAllowed=1;
                  // $scope.searchActive = 0;
                  $rootScope.setFooterNavSelected("on","off","off");
              } else if (viewController=="PlacesListController")  {
                  $scope.headerSideBtnLeftActive = 0;
                  $scope.searchAllowed=0;
                  $rootScope.setFooterNavSelected("off","off","on");
              } else if (viewController=="ConcertController")  {
                  $scope.headerSideBtnLeftActive = 1;
                  $scope.searchAllowed=0;
                  $scope.searchActive = 0;
                  $rootScope.setFooterNavSelected("off","off","off");
              } else if (viewController=="PlaceController")  {
                  $scope.headerSideBtnLeftActive = 1;
                  $scope.searchAllowed=0;
                  $scope.searchActive = 0;
                  $rootScope.setFooterNavSelected("off","off","on");
              } else if (viewController=="MapController")  {
                  $scope.headerSideBtnLeftActive = 0;
                  $scope.searchAllowed=1;
                  $scope.searchActive = 0;
                  $rootScope.setFooterNavSelected("off","on","off");
              } else if (viewController=="PlaceMapController")  {
                  $scope.headerSideBtnLeftActive = 1;
                  $scope.searchAllowed=0;
                  $scope.searchActive = 0;
                  $rootScope.setFooterNavSelected("off","off","on");
              } else {
                  console.log("NO ROUTE SUPPOSED TO END UP HERE !!!");
                  $scope.headerSideBtnLeftActive = 0;
                  $scope.searchAllowed=1;

              }
      });

      //$scope.Data = Data;
      $scope.searchActiveToggle = function() {
          Data.searchActive = !Data.searchActive;
          $scope.searchActive = Data.searchActive;  

          if (Data.searchActive) {
            // $rootScope.d("searchActiveToggle");
          } else {
            // $rootScope.d("!!!searchActiveToggle");
            //if tap search cross, empty field
            Search.term="";
          }
          // $("input#search").focus();
          //console.log("searchActive"+$scope.searchActive);
      };

      // $scope.$watch(Data, function(newValue, oldValue) {
      //     console.log("change!");
      // }, true);

}]);
