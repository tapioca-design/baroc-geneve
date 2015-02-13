myApp.controller('MapController', ['$rootScope','$scope','$http', "$routeParams",'$location','Data','Search','Const', function($rootScope,$scope,$http,$routeParams,$location, Data, Search, Const) { 


      
      Data.headerTitle=Const.appNameFr;
            $scope.Data = Data;
        $http.get(Const.baseUrl+'/symfony/web/app_dev.php/api/city/1/placesWithPerformances').
        success(function(places) {




                        $scope.places = places;
                        console.log("date du premier Place de la liste, il faut virer ceux qui n ont pas de Performance");
                        console.log($scope.places[0].performances[0].date_performance);


                        var mapOptions = {
                                zoom: 14,
                                center: new google.maps.LatLng(46.203129, 6.144861),
                                mapTypeId: google.maps.MapTypeId.SATELLITE,
                                panControl: false,
                                streetViewControl: false,
                                zoomControl: false,
                                mapTypeControl:false,
                                scrollwheel: true,
                            }

                    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
                    $scope.markers = [];
                    var infoWindow = new google.maps.InfoWindow();
                    var createMarker = function (place){

                        var marker = new google.maps.Marker({
                            map: $scope.map,
                            position: new google.maps.LatLng(place.map_latitude, place.map_longitude),
                            title: place.name_fr
                        });
                        
                        
                        google.maps.event.addListener(marker, 'click', function(){
                            infoWindow.setContent(
                                '<a href="#/place/'+place.id+'">'
                                +'<h2>'+marker.title+'</h2>'+marker.content
                                // +'<i>'+place.performances[0].date_performance+'</i>'
                                +'</a>'
                                );
                            infoWindow.open($scope.map, marker);
                        });

                        marker.content = '<div class="infoWindowContent">' + place.address + '</div>';
                        
                        $scope.markers.push(marker);
                        
                    }  
                    
                    for (i = 0; i < $scope.places.length; i++){
                        createMarker($scope.places[i]);
                    }

                    $scope.openInfoWindow = function(e, selectedMarker){
                        e.preventDefault();
                        google.maps.event.trigger(selectedMarker, 'click');
                    }

        });//end success


//       //Data
// var cities = [
//     {
//         city : 'Victoria Hall',
//         desc : 'This is the best city in the world!',
//         lat : 46.201433,
//         long : 6.141130
//         //46.201433, 6.141130
//     },
//     {
//         city : 'Grand theatttre',
//         desc : 'This city is aiiiiite!',
//         lat : 46.201763,
//         long : 6.142680

//         //46.201763, 6.142680
//     },
//     {
//         city : 'Forum Meyrin',
//         desc : 'This is the second best city in the world!',
//         lat : 46.232446,
//         long : 6.081378
//         //46.232446, 6.081378
//     },
//     {
//         city : 'Comédie de Genève',
//         desc : 'This is the second best city in the world!',
//         lat : 46.197285,
//         long : 6.143847
//         //46.232446, 6.081378
//     },
//     {
//         city : 'BFM',
//         desc : 'This is the second best city in the world!',
//         lat : 46.204654,
//         long : 6.137092
//         //46.232446, 6.081378
//     }

// ];
      
      



 }]);


