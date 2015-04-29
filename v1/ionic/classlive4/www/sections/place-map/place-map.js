starter.controller('PlaceMapCtrl', ['$rootScope','$scope','$http', "$stateParams",'$state','$location','Data','Search','Const','Calendar','Map', function($rootScope,$scope,$http,$stateParams,$state,$location, Data, Search, Const, Calendar, Map) { 

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
        
            
//createMarker($scope.place);
Map.createMarker($scope, $scope.place, Calendar, stateType, infoWindow);

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