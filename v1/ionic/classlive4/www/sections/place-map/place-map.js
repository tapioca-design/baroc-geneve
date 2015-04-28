starter.controller('PlaceMapCtrl', ['$rootScope','$scope','$http', "$stateParams",'$state','$location','Data','Search','Const','Calendar', function($rootScope,$scope,$http,$stateParams,$state,$location, Data, Search, Const, Calendar) { 

    $rootScope.d("PlaceMapCtrl");



    var stateUrlPrefix = $state.$current.url.prefix;
    var expl = stateUrlPrefix.split("/");
    var stateType = expl[2];
    var placeId = $stateParams.placeId;
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
                                        // var d = performance.date_performance.split(/[^0-9]/);
                                        // var date_perf = new Date(d[0],d[1]-1,d[2],d[3],d[4],d[5] );
                                        var date_perf = Calendar.dateFromString(performance.date_performance);
                                        var date_now = new Date();
                                        if (date_perf > date_now) {
                                            var month = date_perf.getMonth();
                                            var dayNumber = date_perf.getDate();

                                            if(Calendar.months[month] in monthsWithPerformance){
                                                monthsWithPerformance[Calendar.months[month]].push(dayNumber);
                                            } else {
                                                monthsWithPerformance[Calendar.months[month]]= new Array();
                                                monthsWithPerformance[Calendar.months[month]].push(dayNumber);

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
                                        
                                        html += '<button ng-click="" class="TD-btn color1-bkg-bright white width-full" >Details</button>';

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

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    $rootScope.d("onDeviceReadyInCtrl");
    var isThereConnection = $rootScope.isThereConnection();
    if (!isThereConnection) {
        $rootScope.bug("La cartographie nécessite une connexion internet.");
        $rootScope.d("isThereConnection :: false");
    } else {
        $rootScope.d("isThereConnection :: true");
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
}
function onSuccess(position) {
    $rootScope.d('Cordova navgator getCurrentPosition success '+position.coords.latitude+" - "+position.coords.longitude);
    var me = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    myloc.setPosition(me);

    var directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});
    directionsDisplay.suppressMarkers = true;
    directionsDisplay.setMap( $scope.map);
    var request =
    {
        origin:new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
        destination:new google.maps.LatLng(place.map_latitude, place.map_longitude),
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };
    directionsService.route(request, function(response, status)   {
        $rootScope.d(" directionsService.route");
        if (status == google.maps.DirectionsStatus.OK) 
        {
            directionsDisplay.setDirections(response);
        } else {
            $rootScope.d("error gMap direction (!google.maps.DirectionsStatus.OK)");
        }
    });

}
function onError(error) {
   $rootScope.bug('Impossible de vous localiser: '+error.message);
}
Data.loadingActive = 0;
            //end success
        }).error(function(data, status) {
            var msg='Error 12.2: unable to load place. Status:'+status;
            $rootScope.d(msg);
        });
    }]);