myApp.controller('PlaceMapController', ['$rootScope','$scope','$http', "$routeParams",'$location','Data','Search','Const', function($rootScope,$scope,$http,$routeParams,$location, Data, Search, Const) { 

    var placeId = $routeParams.placeId;
      
      Data.headerTitle=Const.appNameFr;
            $scope.Data = Data;
        $http.get(Const.baseUrl+'/symfony/web/app_dev.php/api/place/'+placeId).
        success(function(place) {

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

                        $scope.place = place;
                        var mapOptions = {
                                zoom: 14,
                                center: new google.maps.LatLng(place.map_latitude, place.map_longitude),
                                mapTypeId: google.maps.MapTypeId.ROADMAP,
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
                            var monthsWithPerformance = new Object();
                            //gather months
                            for (var i = 0; i < place.performances.length; i++) {
                                var performance = place.performances[i];
                                var d = performance.date_performance.split(/[^0-9]/);
                                var date = new Date(d[0],d[1]-1,d[2],d[3],d[4],d[5] );
                                var month = date.getMonth();
                                var dayNumber = date.getDate();

                                if(dateRefMonths[month] in monthsWithPerformance){
                                    monthsWithPerformance[dateRefMonths[month]].push(dayNumber);
                                } else {
                                    monthsWithPerformance[dateRefMonths[month]]= new Array();
                                    monthsWithPerformance[dateRefMonths[month]].push(dayNumber);
                                    
                                }  
                            };
                            
                                // if 27 april has three concerts: 14h 17h 20h, keep one
                                function eliminateDuplicates(arr) {
                                      var i,
                                          len=arr.length,
                                          out=[],
                                          obj={};
                                     
                                      for (i=0;i<len;i++) {
                                        obj[arr[i]]=0;
                                      }
                                      for (i in obj) {
                                        out.push(i);
                                      }
                                      return out;
                                    }
                                for (var key in monthsWithPerformance) {
                                    if (monthsWithPerformance.hasOwnProperty(key)) {
                                        monthsWithPerformance[key] = eliminateDuplicates(monthsWithPerformance[key]);
                                  } else {
                                    console.log("ERROR: this month has no day");
                                    alert("Error 12.7: current month has no day");
                                  }
                                }
                                var html = "";
                                html += "<div>";
                                for (var key in monthsWithPerformance) {
                                    html += "<div>";
                                    html += "<span class='black uppercase text-bold'>";
                                    html += key;
                                    html += ": </span>";
                                    for (var i = 0; i < monthsWithPerformance[key].length; i++) {
                                        html += "<span class='day days-list-element text-light black '>";
                                        html += monthsWithPerformance[key][i];
                                        html += "</span>";
                                    }
                                    html += "</div>";
                                }
                                
                                html += "</div>";
                                html += '<button ng-click="clickPlace(performance.place.id)" target="_blank" class="btn color1-bkg-bright white width-full" >Details</button>';


                            infoWindow.setContent(
                                '<a class="color1-medium" href="#/place/'+place.id+'">'
                                +'<h2 class="text-condensed color1-dark">'+marker.title+'</h2>'
                                + html
                                +'</a>'
                                );
                            infoWindow.open($scope.map, marker);
                        });
                        $scope.markers.push(marker);
                    }  
                        createMarker($scope.place);
                    $scope.openInfoWindow = function(e, selectedMarker){
                        e.preventDefault();
                        google.maps.event.trigger(selectedMarker, 'click');
                    }
                    var myloc = new google.maps.Marker({
                        clickable: false,
                        icon: new google.maps.MarkerImage('//maps.gstatic.com/mapfiles/mobile/mobileimgs2.png',
                                                                        new google.maps.Size(22,22),
                                                                        new google.maps.Point(0,18),
                                                                        new google.maps.Point(11,11)),
                        shadow: null,
                        zIndex: 999,
                        map: $scope.map
                    });

                    if (navigator.geolocation) navigator.geolocation.getCurrentPosition(function(pos) {
                        var me = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
                        myloc.setPosition(me);





                        //direction
                        var directionDisplay;
                        var directionsService = new google.maps.DirectionsService();     //Create a DirectionsService object which is required to communicate with the Google Maps API Direction Service
                        
                        
                                    directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});        //Create a DirectionsRenderer object to render the directions results
                                    // directionsDisplay.suppressMarkers = true;
                            var center = new google.maps.LatLng(0, 0);    //Map is centered at 0,0
                            
                            directionsDisplay.setMap($scope.map);
                            // var start = "Pune";     //Set the source/ origin
                            // var end = "Mumbai";  //Set the destination
                            var request =
                            {
                                    origin:new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                                    destination:new google.maps.LatLng(place.map_latitude, place.map_longitude),
                                    travelMode: google.maps.DirectionsTravelMode.DRIVING          //Current travel mode is DRIVING. You can change to BICYCLING or WALKING and see the changes.
                            };
                            directionsService.route(request, function(response, status)
                            {
                                    if (status == google.maps.DirectionsStatus.OK) //Check if request is successful.
                                    {
                                    directionsDisplay.setDirections(response);         //Display the directions result

                                    }
                            });





                    }, function(error) {
                        alert("Unable to find your location");
                    });


        //end success
        }).error(function(data, status) {
            var msg='Error 12.2: unable to load place. Status:'+status;
            //console.log(msg);
            alert(msg);
        });

 }]);


