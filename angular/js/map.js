myApp.controller('MapController', ['$rootScope','$scope','$http', "$routeParams",'$location','Data','Search','Const', function($rootScope,$scope,$http,$routeParams,$location, Data, Search, Const) { 


      
      Data.headerTitle=Const.appNameFr;
            $scope.Data = Data;
        $http.get(Const.baseUrl+'/symfony/web/app_dev.php/api/city/1/placesWithPerformances').
        success(function(places) {






var dateRefMonths = new Array();
dateRefMonths[0] = "January";
dateRefMonths[1] = "February";
dateRefMonths[2] = "March";
dateRefMonths[3] = "April";
dateRefMonths[4] = "May";
dateRefMonths[5] = "June";
dateRefMonths[6] = "July";
dateRefMonths[7] = "August";
dateRefMonths[8] = "September";
dateRefMonths[9] = "October";
dateRefMonths[10] = "November";
dateRefMonths[11] = "December";

var dateRefDays = new Array();
dateRefDays[0] = "Mon";
dateRefDays[1] = "Tue";
dateRefDays[2] = "Wed";
dateRefDays[3] = "Thu";
dateRefDays[4] = "Fri";
dateRefDays[5] = "Sat";
dateRefDays[6] = "Sun";

function dayDisplay(date){
    return "</span><span class='dayNumber'>"+date.getDate()+"</span> / ";
    //return "<span class='dayName'>"+dateRefDays[date.getDay()]+"</span><span class='dayNumber'>"+date.getDate()+"</span>";
}

                        $scope.places = places;
                        // console.log("date du premier Place de la liste, il faut virer ceux qui n ont pas de Performance");
                        // console.log($scope.places[0].performances[0].date_performance);

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
                            title: place.name_fr,
                            icon: '../symfony/web/bundles/tapiocadesignclasslivegnv/images/places/'+place.name_url+'/map-markers.png',
                        });
                        google.maps.event.addListener(marker, 'click', function(){
                            var concertsList = "";


                            var html = "";
                            html += "<div class='date-resume'>";
                            var monthsWithPerformance = new Array();
                            //gather months
                            for (var i = 0; i < place.performances.length; i++) {
                                var performance = place.performances[i];
                                var date = new Date(performance.date_performance);
                                var month = date.getMonth();

                                if(monthsWithPerformance.indexOf(month) > -1){
                                    //month already registered in monthsWithPerformance
                                    //console.log(month+" already registered");
                                    
                                } else {
                                    //not yet registered, new moth
                                    //array [april] = this performance
                                    monthsWithPerformance.push(month);
                                    //console.log(dateRefMonths[month]+" has been registered");
                                    html += "<div class='month'>";
                                    html += dateRefMonths[month];
                                    html += "</div>";
                                }
                                html += "<span class='day text-light text-bold'>";
                                html += dayDisplay(date);
                                html += "</span>";
                                // concertsList += '<div class="date"><div class="date-text drop-shadow"><div class="day day-alt1 black text-light" ><span class="text-tiny">Wed</span>21</div><div class="month month-alt1 text-bold white">MARCH</div></div></div>';
                            };
                            html += "</div>";



                            infoWindow.setContent(
                                '<a class="red-darkest" href="#/place/'+place.id+'">'
                                +'<h2 class="text-condensed">'+marker.title+'</h2>'+concertsList
                                // +'<i>'+place.performances[0].date_performance+'</i>'
                                + html
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



 }]);


