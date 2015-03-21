starter.controller('PlaceMapCtrl', ['$rootScope','$scope','$http', "$stateParams",'$state','$location','Data','Search','Const', function($rootScope,$scope,$http,$stateParams,$state,$location, Data, Search, Const) { 

$rootScope.d("PlaceMapCtrl");


    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        $rootScope.d("onDeviceReadyInCtrl");
        var isThereConnection = $rootScope.isThereConnection();
        if (!isThereConnection) {
            alert("La cartographie nécessite une connexion internet.");
            $rootScope.d("isThereConnection :: false");
            // $scope.connectionNeeded=1;
            return;
        } else {
            $rootScope.d("isThereConnection :: true");
            // $scope.connectionNeeded=0;
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    }
    function onSuccess(position) {
        // $rootScope.d(position.coords.latitude+" --- "+position.coords.longitude);
    }
    function onError(error) {
       $rootScope.bug('Impossible de vous localiser.');
   }




   $rootScope.d("after deviceready bloc");



          var stateUrlPrefix = $state.$current.url.prefix;
          var expl = stateUrlPrefix.split("/");
          var stateType = expl[2];
          // $scope.stateType = stateType;





   var placeId = $stateParams.placeId;
   // var placeId = $routeParams.placeId;


   Data.headerTitle=Const.appNameFr;
   Data.loadingActive = 1;
   $scope.Data = Data;

   var windowHeight = $( window ).height();
   var documentHeight = $( document ).height();
   windowHeight = windowHeight - 88;
   $scope.mapHeightStyle = "height:"+windowHeight+"px";

   $http.get(Const.baseUrl+'/symfony/web/api/place/'+placeId).
   success(function(place) {
    $rootScope.d("http.get");
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
        $rootScope.getImagePath(place,"places",place.name_url,"map-markers.png",
            function (glbkgp_callback_arg) {
                                $rootScope.d("getImagePath");
                                // console.log("createMarker");
                                var place = glbkgp_callback_arg;

                                var marker = new google.maps.Marker({
                                    map: $scope.map,
                                    position: new google.maps.LatLng(place.map_latitude, place.map_longitude),
                                    title: place.name_fr,
                                    icon: place.landscapeBkgPath,
                                });
                                google.maps.event.addListener(marker, 'click', function(){
                                    console.log("addListener click");
                                    var monthsWithPerformance = new Object();
                                    //gather months
                                    for (var i = 0; i < place.performances.length; i++) {
                                        console.log("place.performances.length");
                                        var performance = place.performances[i];
                                        var d = performance.date_performance.split(/[^0-9]/);
                                        var date = new Date(d[0],d[1]-1,d[2],d[3],d[4],d[5] );

                                        var date_now = new Date();
                                            if (date > date_now) {
                                                var month = date.getMonth();
                                                var dayNumber = date.getDate();

                                                if(dateRefMonths[month] in monthsWithPerformance){
                                                    monthsWithPerformance[dateRefMonths[month]].push(dayNumber);
                                                } else {
                                                    monthsWithPerformance[dateRefMonths[month]]= new Array();
                                                    monthsWithPerformance[dateRefMonths[month]].push(dayNumber);
                                                    
                                                }  
                                            }
                                    };
                                    
                                        // if 27 april has three concerts: 14h 17h 20h, keep one
                                        function eliminateDuplicates(arr) {
                                            console.log("eliminateDuplicates");
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
                                        // html += '<button ng-click="clickPlace(performance.place.id)" target="_blank" class="btn color1-bkg-bright white width-full" >Details</button>';




                                        html += '<button ng-click="" class="TD-btn color1-bkg-bright white width-full" >Details</button>';



                                        //we re clicking from DIRECTIONS button of place details, but this place detail view could come from Concerts tab, Map tab or Place tab, we don t know, so add stateType

                                        infoWindow.setContent(
                                            '<a class="color1-medium" href="#/tab/'+stateType+'/place/'+place.id+'">'
                                            +'<h2 class="text-condensed color1-dark">'+marker.title+'</h2>'
                                            + html
                                            +'</a>'
                                            );
                                        infoWindow.open($scope.map, marker);
                                    });
$scope.markers.push(marker);
});
}  
createMarker($scope.place);
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
                                    $rootScope.d("Unable to find your location.");
                                });
Data.loadingActive = 0;
            //end success
        }).error(function(data, status) {
            var msg='Error 12.2: unable to load place. Status:'+status;
                //console.log(msg);
                $rootScope.d(msg);
            });

        

    }]);