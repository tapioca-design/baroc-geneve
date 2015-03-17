var starter = angular.module('starter', ['ionic', "ngRoute", "ngTouch","ngResource","ngAnimate", 'angular-carousel']);

starter.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

// starter.controller('DemoCtrl', function($scope) {

//             $scope.colors = ["#fc0003", "#f70008", "#f2000d", "#ed0012", "#e80017", "#e3001c", "#de0021", "#d90026", "#d4002b", "#cf0030", "#c90036", "#c4003b", "#bf0040", "#ba0045", "#b5004a", "#b0004f", "#ab0054", "#a60059", "#a1005e", "#9c0063", "#960069", "#91006e", "#8c0073", "#870078", "#82007d", "#7d0082", "#780087", "#73008c", "#6e0091", "#690096", "#63009c", "#5e00a1", "#5900a6", "#5400ab", "#4f00b0", "#4a00b5", "#4500ba", "#4000bf", "#3b00c4", "#3600c9", "#3000cf", "#2b00d4", "#2600d9", "#2100de", "#1c00e3", "#1700e8", "#1200ed", "#0d00f2", "#0800f7", "#0300fc"];

//             function getSlide(target, style) {
//                 var i = target.length;
//                 return {
//                     id: (i + 1),
//                     label: 'slide #' + (i + 1),
//                     img: 'http://lorempixel.com/450/300/' + style + '/' + ((i + 1) % 10) ,
//                     color: $scope.colors[ (i*10) % $scope.colors.length],
//                     odd: (i % 2 === 0)
//                 };
//             }

//             function addSlide(target, style) {
//                 target.push(getSlide(target, style));
//             };

//             $scope.carouselIndex = 3;
//             $scope.carouselIndex2 = 0;
//             $scope.carouselIndex2 = 1;
//             $scope.carouselIndex3 = 5;
//             $scope.carouselIndex4 = 5;

//             function addSlides(target, style, qty) {
//                 for (var i=0; i < qty; i++) {
//                     addSlide(target, style);
//                 }
//             }

//             // 1st ngRepeat demo
//             $scope.slides = [];
//             addSlides($scope.slides, 'sports', 50);

//             // 2nd ngRepeat demo
//             $scope.slides2 = [];
//             addSlides($scope.slides2, 'sports', 10);

//             // 3rd ngRepeat demo
//             $scope.slides3 = [];
//             addSlides($scope.slides3, 'people', 50);

//             // 4th ngRepeat demo
//             $scope.slides4 = [];
//             addSlides($scope.slides4, 'city', 50);


//             // 5th ngRepeat demo
//             $scope.slides6 = [];
//             $scope.carouselIndex6 = 0;
//             addSlides($scope.slides6, 'sports', 10);
//             $scope.addSlide = function(at) {
//                 if(at==='head') {
//                     $scope.slides6.unshift(getSlide($scope.slides6, 'people'));
//                 } else {
//                     $scope.slides6.push(getSlide($scope.slides6, 'people'));
//                 }
//             }

//         });

starter.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);

starter.run(function ($rootScope, $location,$http,Const,Data) {

  $rootScope.d = function(t) {
    console.log(t);
    alert(t);
  }

  $rootScope.isThereConnection = function() {
        // document.addEventListener("deviceready", onDeviceReady, false);
        // function onDeviceReady() {
            // $rootScope.d("isThereConnection - navigator.network.connection.type: "+navigator.network.connection.type);
            if(navigator.network.connection.type == Connection.NONE){
                // $rootScope.d("nocon");
                return false;
            }else{
                // $rootScope.d("yescon");
                return true;
            }
        // }
    };

  $rootScope.getImagePath = function (object,folder,name_url,filename,callback) {
                // $rootScope.d("getImagePath");
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
              // $rootScope.d("http succes for "+url);
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
                    alert("httpRrror, url:"+url+", data: "+data+" status:"+status+" headers:"+headers+" config:"+config);
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
/***********************************************************************************************/
starter.factory('Const', function($location){
    var baseUrlInner;
    baseUrlInner= "http://tapiocadesign.com/_CLASSLIVE/v1";
    return {
      baseUrl:baseUrlInner, 
      url:baseUrlInner+"/angular-static/",
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

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  

  .state('tab.concerts', {
      url: '/concerts',
      views: {
        'tab-concerts': {
          templateUrl: 'templates/tab-concerts.html',
          controller: 'ConcertsCtrl'
        }
      }
    })
    .state('tab.concert-detail', {
      url: '/concerts/:workId',
      views: {
        'tab-concerts': {
          templateUrl: 'templates/concert-detail.html',
          controller: 'ConcertDetailCtrl'
        }
      }
    })
    .state('tab.map', {
    url: '/map',
    views: {
      'tab-map': {
        templateUrl: 'templates/tab-map.html',
        controller: 'MapCtrl'
      }
    }
  })
  .state('tab.places', {
    url: '/places',
    views: {
      'tab-places': {
        templateUrl: 'templates/tab-places.html',
        controller: 'PlacesCtrl'
      }
    }
  })
  .state('tab.place-detail', {
    url: '/places/:placeId',
    views: {
      'tab-places': {
        templateUrl: 'templates/place-detail.html',
        controller: 'PlaceDetailCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  // $urlRouterProvider.otherwise(function($injector, $location){
  //   $rootScope.d("OTHERWISE");
  // });
  $urlRouterProvider.otherwise('/tab/concerts');

});
