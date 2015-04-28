starter.controller('ConcertDetailCtrl', ['$rootScope', '$scope', '$stateParams','$location','$state','Data', function($rootScope, $scope, $stateParams,$location,$state, Data) {

$rootScope.d("ConcertDetailCtrl");

          Data.loadingActive = 1;
          $scope.Data = Data;
          var stateUrlPrefix = $state.$current.url.prefix;
          var expl = stateUrlPrefix.split("/");
          var stateType = expl[2];
          $scope.stateType = stateType;
          $scope.colors = ["#fc0003", "#f70008", "#f2000d", "#ed0012", "#e80017", "#e3001c", "#de0021", "#d90026", "#d4002b", "#cf0030", "#c90036", "#c4003b", "#bf0040", "#ba0045", "#b5004a", "#b0004f", "#ab0054", "#a60059", "#a1005e", "#9c0063", "#960069", "#91006e", "#8c0073", "#870078", "#82007d", "#7d0082", "#780087", "#73008c", "#6e0091", "#690096", "#63009c", "#5e00a1", "#5900a6", "#5400ab", "#4f00b0", "#4a00b5", "#4500ba", "#4000bf", "#3b00c4", "#3600c9", "#3000cf", "#2b00d4", "#2600d9", "#2100de", "#1c00e3", "#1700e8", "#1200ed", "#0d00f2", "#0800f7", "#0300fc"];

            $scope.path = function ( path ) {
              $location.path(path);
              
            };
            $scope.absolute = function ( path ) {
              window.open(path,"_system");
            };
            function getSlide(target, style) {
                var i = target.length;
                return {
                    id: (i + 1),
                    label: 'slide #' + (i + 1),
                    img: 'http://lorempixel.com/450/300/' + style + '/' + ((i + 1) % 10) ,
                    color: $scope.colors[ (i*10) % $scope.colors.length],
                    odd: (i % 2 === 0)
                };
            }
            function addSlide(target, style) {
                target.push(getSlide(target, style));
            };
            function addSlides(target, style, qty) {
                for (var i=0; i < qty; i++) {
                    addSlide(target, style);
                }
            }
            $scope.slides = [];
            addSlides($scope.slides, 'sports', 50);
            $scope.slides2 = [];
            addSlides($scope.slides2, 'sports', 10);
            $scope.slides3 = [];
            addSlides($scope.slides3, 'people', 50);
            $scope.slides4 = [];
            addSlides($scope.slides4, 'city', 50);
            $scope.slides6 = [];
            $scope.carouselIndex6 = 0;
            addSlides($scope.slides6, 'sports', 10);
            $scope.addSlide = function(at) {
                if(at==='head') {
                    $scope.slides6.unshift(getSlide($scope.slides6, 'people'));
                } else {
                    $scope.slides6.push(getSlide($scope.slides6, 'people'));
                }
            }
          var workId = $stateParams.workId;

          $rootScope.getData("work/"+workId, "works",
          function (callback_arg) {
              var work = callback_arg;
              $scope.workTitle = work.name;
              $scope.work = work;
          });
          $rootScope.getData('work/'+workId+'/performances', "works",
          function (callback_arg) {
              var performances = callback_arg;
              Data.loadingActive = 0;
              $scope.performances = performances;
          });
}]);