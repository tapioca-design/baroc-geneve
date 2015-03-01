myApp.controller('PlacesListController', ['$rootScope','$scope','$http','Data','Search','Const', function($rootScope, $scope,$http, Data, Search, Const) {

    Data.loadingActive = 1;
    
    Data.headerTitle=Const.appNameFr;
       
       $scope.Data = Data;
       $scope.Const = Const;

        if (localStorage.getItem("city/1/places") === null) {
          console.log("places not here");
          $http.get(Const.baseUrl+'/symfony/web/api/city/1/places').
            success(function(places) {
                localStorage.setItem('city/1/places', JSON.stringify(places));
                $scope.Data = Data;
                $scope.places = places;
                Data.loadingActive = 0; 
            });
          } else {
                console.log("places local:");
                var placesLS = localStorage.getItem('city/1/places');
                $scope.places = JSON.parse(placesLS);
                Data.loadingActive = 0; 
          }

 }]);


/***************************************************************************/


myApp.controller('PlaceController', ['$rootScope','$scope','$http', '$routeParams','Data','Search','Const', function($rootScope, $scope,$http, $routeParams, Data, Search, Const) {
	


  $scope.getLandscapeBkgPath = function (object,folder,name_url) {
                var localImagesPath = "images/";
                var serverImagesPath = Const.baseUrl+"/symfony/web/bundles/tapiocadesignclasslivegnv/images/";
                //works landscape suffix
                    var pathSuffix = folder+"/"+name_url+"/landscape.jpg";
                    //if img exist locally, load it, otherwise get in on server
                    // serverPath
                    var localImage = localImagesPath+pathSuffix;
                    $http.get(localImage).
                    success(function(data, status, headers, config) {
                        //img exists locally
                        object.landscapeBkgPath = localImage;
                        $scope.place = object;
                         // localImage;
                    }).
                    error(function(data, status, headers, config) {
                        //img does not exist locally, load the distant one
                        var distantImage = serverImagesPath+pathSuffix
                         // distantImage;
                         object.landscapeBkgPath = distantImage;
                        $scope.place = object;
                    });
            };


    Data.loadingActive = 1;
    Data.concertsNoResultAllowed = 0;
	var placeId = $routeParams.placeId;










if (localStorage.getItem('place/'+placeId) === null) {
          console.log("place not here");
          $http.get(Const.baseUrl+'/symfony/web/api/place/'+placeId).
            success(function(place) {
                localStorage.setItem('place/'+placeId, JSON.stringify(place));
                $scope.Data = Data;
                // $scope.place = place;
                $scope.getLandscapeBkgPath(place,"places",place.name_url);
                Data.headerTitle=place.name_fr;
                Data.loadingActive = 0; 
            });
          } else {
                console.log("place local:");
                var placeLS = localStorage.getItem('place/'+placeId);
                placeLS = JSON.parse(placeLS);
                $scope.getLandscapeBkgPath(placeLS,"places",placeLS.name_url);
                Data.headerTitle=placeLS.name_fr;
                Data.loadingActive = 0; 
          }








        /*********** concerts in this place ***********/
            if (localStorage.getItem('place/'+placeId+'/performancesGroupedByWork') === null) {
                console.log("performancesGroupedByWork not here:");
                $http.get(Const.baseUrl+'/symfony/web/api/place/'+placeId+'/performancesGroupedByWork').
                success(function(performances) {
                    localStorage.setItem('place/'+placeId+'/performancesGroupedByWork', JSON.stringify(performances));
                    $scope.performances = performances;
                    Data.loadingActive = 0;
                    Data.concertsNoResultAllowed = 1;

            }).error(function(data, status, headers, config) {

              });
            } else {
                console.log("performancesGroupedByWork local:");
                var performancesLS = localStorage.getItem('place/'+placeId+'/performancesGroupedByWork');
                performancesLS = JSON.parse(performancesLS);
                $scope.performances = performancesLS;
                Data.loadingActive = 0; 
            }
 }]);
