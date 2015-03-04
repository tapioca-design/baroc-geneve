myApp.controller('MapController', ['$rootScope','$scope','$http', "$routeParams",'$location','Data','Search','Const', function($rootScope,$scope,$http,$routeParams,$location, Data, Search, Const) { 

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        // alert("onDeviceReadyInCtrl");
        var isThereConnection = $rootScope.isThereConnection();
        if (!isThereConnection) {
            // alert("isThereConnection :: false");
            $scope.connectionNeeded=1;
            return;
        } else {
            // alert("isThereConnection :: true");
            $scope.connectionNeeded=0;
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    }
    function onSuccess(position) {
        // alert("onSuccess");
        // var element = document.getElementById('geolocation');
        // alert(position.coords.latitude+" --- "+position.coords.longitude);
    
    

      Data.headerTitle=Const.appNameFr;
      Data.loadingActive = 1;

            $scope.Data = Data;

            var windowHeight = $( window ).height();
            var documentHeight = $( document ).height();
            windowHeight = windowHeight - 88;
            $scope.mapHeightStyle = "height:"+windowHeight+"px";
        $http.get(Const.baseUrl+'/symfony/web/app_dev.php/api/city/1/placesWithPerformances').
        success(function(places) {
var dateRefMonths = new Array();
dateRefMonths[0] = "Janvier";
dateRefMonths[1] = "Février";
dateRefMonths[2] = "Mars";
dateRefMonths[3] = "Avril";
dateRefMonths[4] = "Mai";
dateRefMonths[5] = "Juin";
dateRefMonths[6] = "Juillet";
dateRefMonths[7] = "Août";
dateRefMonths[8] = "Septembre";
dateRefMonths[9] = "Octobre";
dateRefMonths[10] = "Novembre";
dateRefMonths[11] = "Décembre";
var dateRefDays = new Array();
dateRefDays[0] = "Lun";
dateRefDays[1] = "Mar";
dateRefDays[2] = "Mer";
dateRefDays[3] = "Jeu";
dateRefDays[4] = "Ven";
dateRefDays[5] = "Sam";
dateRefDays[6] = "Dim";
                        $scope.places = places;
                        // console.log("date du premier Place de la liste, il faut virer ceux qui n ont pas de Performance");
                        // zoom: 10,
                        // center: new google.maps.LatLng(46.215, 6.13),
                        var mapOptions = {
                                zoom: 10,
                                center: new google.maps.LatLng(46.215, 6.13),
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

                    // var mapBounds = new google.maps.LatLngBounds();



                    var createMarker = function (place){
                        $rootScope.getImagePath(place,"places",place.name_url,"map-markers.png",
                        function (glbkgp_callback_arg) {
                            // console.log("glbkgp_callback_arg");
                            // console.log(glbkgp_callback_arg);
                            
                            

                            
                            var place = glbkgp_callback_arg;

                            var markerPosition = new google.maps.LatLng(place.map_latitude, place.map_longitude);

                            // mapBounds.extend(markerPosition);

                            var marker = new google.maps.Marker({
                                map: $scope.map,
                                position: markerPosition,
                                title: place.name_fr,
                                icon: place.landscapeBkgPath,
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
                                    //month already registered in monthsWithPerformance
                                    // console.log(month+" already registered");
                                    // console.log("DAY NEXT dayNumber:"+dayNumber+" of  month:"+dateRefMonths[month]+" has been inserted");
                                    //april june already exist, so push new value into into
                                    monthsWithPerformance[dateRefMonths[month]].push(dayNumber);
                                } else {
                                    //not yet registered, new moth
                                    //array [april] = this performance
                                    //set object with propoerty "april" and value is array with days
                                    // console.log("month:"+month+" monthLabel:"+dateRefMonths[month]+" has been registered");
                                    // console.log("DAY FIRST OF MONTH dayNumber:"+dayNumber+" of  month:"+dateRefMonths[month]+" has been inserted");
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
                                html += '<button ng-click="clickPlace(performance.place.id)" target="_blank" class="TD-btn color1-bkg-bright white width-full" >Details</button>';


                            infoWindow.setContent(
                                '<a class="color1-medium" href="#/place/'+place.id+'">'
                                +'<h2 class="text-condensed color1-dark">'+marker.title+'</h2>'
                                + html
                                +'</a>'
                                );
                            infoWindow.open($scope.map, marker);
                        });
                        // marker.content = '<div class="infoWindowContent">' + place.address + '</div>';
                        $scope.markers.push(marker);
                        });
                    }  

                    for (i = 0; i < $scope.places.length; i++){
                        createMarker($scope.places[i]);
                    }
                    





                    $scope.openInfoWindow = function(e, selectedMarker){
                        e.preventDefault();
                        google.maps.event.trigger(selectedMarker, 'click');
                    }
                    var myloc = new google.maps.Marker({
                        clickable: false,
                        icon: new google.maps.MarkerImage('http://maps.gstatic.com/mapfiles/mobile/mobileimgs2.png',
                                                                        new google.maps.Size(22,22),
                                                                        new google.maps.Point(0,18),
                                                                        new google.maps.Point(11,11)),
                        shadow: null,
                        zIndex: 999,
                        map: $scope.map
                    });
                    if (navigator.geolocation) navigator.geolocation.getCurrentPosition(function(pos) {
                        //old js browser way
                        var me = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
                        myloc.setPosition(me);
                        // phonegap geo api way
                        // var myLat = position.coords.latitude;
                        // var myLong = pposition.coords.longitude;


                    }, function(error) {
                        alert("Unable to find your location");
                    });
                        // $scope.map.fitBounds(mapBounds);

                        
                    Data.loadingActive = 0;
        }).error(function(data, status) {
            var msg='Impossible de vous localiser. Status:'+status;
            //console.log(msg);
            alert(msg);
        });
        }

        function onError(error) {
         alert('Impossible de vous localiser.');
        }
 }]);


