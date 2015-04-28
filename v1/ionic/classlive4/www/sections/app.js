var starter = angular.module('starter', ['ionic',"ngAnimate", 'angular-carousel', 'ngCordova']);

starter.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
starter.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);
starter.run(function ($rootScope, $location,$http,$state,$cordovaStatusbar,$ionicPlatform,Const,Data) {

  $rootScope.debugMode=false;

  $rootScope.d = function(t) {
    if ($rootScope.debugMode) {
      console.log(t);
      alert(t);
    }
  }

  $rootScope.bug = function(t) {
    alert(t);
  }

$ionicPlatform.ready(function() {
  $cordovaStatusbar.overlaysWebView(false);
  $cordovaStatusbar.styleHex('#e68c6b');
});
   


  $rootScope.transitionTo = function(stateName){
    $state.transitionTo(stateName);
  }
  
  $rootScope.isThereConnection = function() {
        if(navigator.network.connection.type == Connection.NONE){
                return false;
            }else{
                return true;
            }
    };
  $rootScope.getImagePath = function (object,folder,name_url,filename,callback) {
                var localImagesPath = "img/";
                var serverImagesPath = Const.baseUrl+"/symfony/web/bundles/tapiocadesignclasslivegnv/images/";
                //works landscape suffix
                    var pathSuffix = folder+"/"+name_url+"/"+filename;
                    //if img exist locally, load it, otherwise get in on server
                    // serverPath
                    var localImage = localImagesPath+pathSuffix;
                    var distantImage = serverImagesPath+pathSuffix;
                    $http.get(localImage).success(function(data, status, headers, config) {
                        //img exists locally
                        object.landscapeBkgPath = localImage;
                        callback(object);
                         // localImage;
                    }).error(function(data, status, headers, config) {
                        //img does not exist locally, load the distant one
                         object.landscapeBkgPath = distantImage;
                        callback(object);
                    });
            };

    $rootScope.getData = function (url_suffix,folder,callback) {
        if (localStorage.getItem(url_suffix) === null) {
            var url=Const.baseUrl+'/symfony/web/api/'+url_suffix;
            $http.get(url).
            success(function(data) {
                localStorage.setItem(url_suffix, JSON.stringify(data));
                //if no need to add landscape img to data, skip
                if (folder!="") {
                  $rootScope.getImagePath(data,folder,data.name_url,"landscape.jpg",
                    function (glbkgp_callback_arg) {
                        callback(glbkgp_callback_arg);
                  });
                } else {
                  callback(data);
                }
            }).error(function(data, status, headers, config) {
                    alert("Impossible de charger les données");
              });
          } else {
                var data = localStorage.getItem(url_suffix);
                data = JSON.parse(data);
                if (folder!="") {
                  $rootScope.getImagePath(data,folder,data.name_url,"landscape.jpg",
                    function (glbkgp_callback_arg) {
                        callback(glbkgp_callback_arg);
                  });
                } else {
                  callback(data);
                }
          }
  }
});
starter.factory('Const', function($location){
    var baseUrlInner;
    //baseUrlInner= "http://tapiocadesign.com/_CLASSLIVE/v1";
    baseUrlInner= "http://localhost/v1";
    return {
      baseUrl:baseUrlInner, 
      appNameFr:"Classique live Genève"
    };
});
starter.factory('Data', function($location){
    return {
      headerTitle: '', 
      filteredConcerts:"", 
      searchAllowed:1, 
      searchActive:0,
      concertsNoResultAllowed:0,
      loadingActive:1,
    };
});
starter.factory('Navigation', function(){
    return {
      concerts:"off", 
      map:"off", 
      places:"off",
    };
});
starter.factory('Search', function(){
    return {term: ''};
});
starter.factory('Concert', function(){
    return {term: ''};
});

starter.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  // setup an abstract state for the tabs directive
  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "sections/tabs/tabs.html"
  })
  // Each tab has its own nav history stack:
  .state('tab.concerts', {
      url: '/concerts',
      views: {
        'tab-concerts': {
          templateUrl: 'sections/concerts/concerts.html',
          controller: 'ConcertsCtrl'
        }
      }
    })
    .state('tab.concert-detail', {
      url: '/concerts/concert/:workId',
      views: {
        'tab-concerts': {
          templateUrl: 'sections/concert/concert-detail.html',
          controller: 'ConcertDetailCtrl'
        }
      }
    })
    .state('tab.concert-place-detail', {
      url: '/concerts/place/:placeId',
      views: {
        'tab-concerts': {
          templateUrl: 'sections/place/place-detail.html',
          controller: 'PlaceDetailCtrl'
        }
      }
    })
    .state('tab.concert-place-map', {
    url: '/concerts/place-map/:placeId',
    views: {
      'tab-concerts': {
        templateUrl: 'sections/place-map/place-map.html',
        controller: 'PlaceMapCtrl'
      }
    }
  })
    /********/
  .state('tab.map', {
    url: '/map',
    views: {
      'tab-map': {
        templateUrl: 'sections/map/map.html',
        controller: 'MapCtrl'
      }
    }
  })
  .state('tab.map-concert-detail', {
      url: '/map/concert/:workId',
      views: {
        'tab-map': {
          templateUrl: 'sections/concert/concert-detail.html',
          controller: 'ConcertDetailCtrl'
        }
      }
    })
    .state('tab.map-place-detail', {
      url: '/map/place/:placeId',
      views: {
        'tab-map': {
          templateUrl: 'sections/place/place-detail.html',
          controller: 'PlaceDetailCtrl'
        }
      }
    })
    .state('tab.map-place-map', {
    url: '/map/place-map/:placeId',
    views: {
      'tab-map': {
        templateUrl: 'sections/place-map/place-map.html',
        controller: 'PlaceMapCtrl'
      }
    }
  })
    /*************/
  .state('tab.places', {
    url: '/places',
    views: {
      'tab-places': {
        templateUrl: 'sections/places/places.html',
        controller: 'PlacesCtrl'
      }
    }
  })
  .state('tab.place-detail', {
    url: '/places/place/:placeId',
    views: {
      'tab-places': {
        templateUrl: 'sections/place/place-detail.html',
        controller: 'PlaceDetailCtrl'
      }
    }
  })
  .state('tab.place-concert-detail', {
    url: '/places/concert/:workId',
    views: {
      'tab-places': {
        templateUrl: 'sections/concert/concert-detail.html',
        controller: 'ConcertDetailCtrl'
      }
    }
  })
  .state('tab.place-place-map', {
    url: '/places/place-map/:placeId',
    views: {
      'tab-places': {
        templateUrl: 'sections/place-map/place-map.html',
        controller: 'PlaceMapCtrl'
      }
    }
  });
  $urlRouterProvider.otherwise('/tab/concerts');
});
