starter.controller('MapCtrl', ['$rootScope','$scope','$http','$location','Data','Const','Calendar','Map', function($rootScope,$scope,$http,$location, Data, Const, Calendar, Map) { 
	$rootScope.d("MapCtrl");
	Data.loadingActive = 1;
	stateType = "map";
	// alert(Calendar.dateFromString());
	$scope.Data = Data;
	$http.get(Const.baseUrl+'/symfony/web/api/city/1/placesWithPerformances').
	success(function(places) {
		$rootScope.d("http get success");
		var placesWithEventsToCome = new Array();
				// places.performances
				for (var i = 0; i < places.length; i++) {
					var place = places[i];
					place.numberOfEventsToCome = 0;
					var performances = place.performances;

					for (var j = 0; j < performances.length; j++) {
						var performance = performances[j];
						// var d = performance.date_performance.split(/[^0-9]/);
						// var date_perf = new Date(d[0],d[1]-1,d[2],d[3],d[4],d[5] );
						var date_perf = Calendar.dateFromString(performance.date_performance);


						var date_now = new Date();
						if (date_perf > date_now) {
							place.numberOfEventsToCome++;
						}
					}
					if (place.numberOfEventsToCome > 0) {
						placesWithEventsToCome.push(place);
					}
					
				}
				places = placesWithEventsToCome;
				$scope.places = places;
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

for (i = 0; i < $scope.places.length; i++){
	// createMarker($scope.places[i]);
	//$rootScope place Calendar stateType infoWindow
	Map.createMarker($scope, $scope.places[i], Calendar, stateType, infoWindow);
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

Data.loadingActive = 0;


document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
	$rootScope.d("onDeviceReadyInCtrl");
	var isThereConnection = $rootScope.isThereConnection();
	if (!isThereConnection) {
		$rootScope.bug("La cartographie nécessite une connexion internet.");
		$rootScope.d("isThereConnection :: false");
	} else {
		$rootScope.d("isThereConnection :: true");
		if (navigator.geolocation) {
			$rootScope.d("navigator.geolocation true");
			navigator.geolocation.getCurrentPosition(onSuccess, onError);
		} else if (!navigator.geolocation) {
			$rootScope.d("navigator.geolocation false");
		} else {
			$rootScope.d("navigator.geolocation ELSE...");
		}


	}
}
function onSuccess(position) {
	$rootScope.d("onSuccess");
	$rootScope.d('Cordova navgator getCurrentPosition success '+position.coords.latitude+" - "+position.coords.longitude);
	var me = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	myloc.setPosition(me);
}
function onError(error) {
	$rootScope.d('Impossible de vous localiser');
	$rootScope.bug('Impossible de vous localiser: '+error.message);
}
}).error(function(data, status) {
	var msg='Impossible de charger les lieux. Status:'+status;
	$rootScope.bug(msg);
});
}]);