myApp.controller('FooterController', ['$rootScope','$scope','$http',"$route", 'Data','Navigation', function($rootScope, $scope, $http, $route, Data, Navigation) {


     // console.log("footer");
     $scope.Navigation = Navigation;
     // console.log("$scope.Navigation");
     // console.log($scope.Navigation);
     //  $scope.$on('$routeChangeStart', function(next, current) { 

     //      var currentViewController = current.$$route.controller;
          
     //      if (currentViewController=="ConcertsListController" || currentViewController=="PlacesListController")  {
     //          $scope.listClass="";
			  // $scope.mapClass="";
     //          $scope.placeClass="";

     //      } else if (currentViewController=="ConcertController")  {
              

     //      } else if (currentViewController=="PlaceController")  {
              
              
     //      } else {
     //          console.log("ERROR from footer, url should not end up here");
     //      }
     //  });

     //  $scope.Data = Data;
     //  $scope.searchShowHideToggle = function() {
     //      $scope.searchShowHideToggleBoolean = !$scope.searchShowHideToggleBoolean;
          
     //  };
}]);