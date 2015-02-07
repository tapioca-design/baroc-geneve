// myApp.controller('FooterController', ['$rootScope','$scope','$http',"$route", 'Data', function($rootScope, $scope, $http, $route, Data) {
//       $scope.$on('$routeChangeStart', function(next, current) { 

//           var currentViewController = current.$$route.controller;
//           // console.log("currentViewController");
//           // console.log(currentViewController);
//            $scope.listBtn={};
//            $scope.mapBtn={};
//            $scope.Btn={};
           
//           if (currentViewController=="ConcertsListController" || currentViewController=="PlacesListController")  {
//               $scope.search.visible = 1;
//               $scope.back.visible = 0;
//           } else if (currentViewController=="ConcertController")  {
//               $scope.search.visible = 0;
//               $scope.back.visible = 1;
//               $scope.back.url = "#/concerts-list";
//           } else if (currentViewController=="PlaceController")  {
//               $scope.search.visible = 0;
//               $scope.back.visible = 1;
//               $scope.back.url = "#/places-list";
//           } else {
//               $scope.search.visible = 1;
//               $scope.back.visible = 0;
//           }
//       });

//       $scope.Data = Data;
//       $scope.searchShowHideToggle = function() {
//           $scope.searchShowHideToggleBoolean = !$scope.searchShowHideToggleBoolean;
          
//       };
// }]);