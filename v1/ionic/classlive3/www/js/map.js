starter.controller('MapCtrl', ['$rootScope','$scope','$http','$location','Data','Const', function($rootScope,$scope,$http,$location, Data, Const) { 
$rootScope.d("MapCtrl");
Data.loadingActive = 1;
   $scope.Data = Data;
    $http.get(Const.baseUrl+'/symfony/web/api/city/1/placesWithPerformances').
            success(function(places) {
				$rootScope.d("http get success");
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

				var placesWithEventsToCome = new Array();
				// places.performances
				for (var i = 0; i < places.length; i++) {
					var place = places[i];
					place.numberOfEventsToCome = 0;
					var performances = place.performances;
					for (var j = 0; j < performances.length; j++) {
						var performance = performances[j];
						var d = performance.date_performance.split(/[^0-9]/);
					    var date_perf = new Date(d[0],d[1]-1,d[2],d[3],d[4],d[5] );
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

				var createMarker = function (place){
				$rootScope.getImagePath(place,"places",place.name_url,"map-markers.png",
				function (glbkgp_callback_arg) {
				var place = glbkgp_callback_arg;

				var markerPosition = new google.maps.LatLng(place.map_latitude, place.map_longitude);

				var marker = new google.maps.Marker({
				    map: $scope.map,
				    position: markerPosition,
				    title: place.name_fr,
				    icon: place.landscapeBkgPath,
				});
				google.maps.event.addListener(marker, 'click', function(){
				var monthsWithPerformance = new Object();
				for (var i = 0; i < place.performances.length; i++) {
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
		            $scope.absolute = function ( path ) {
		              window.open(path,"_system");
		            };

				    html += '<button ng-click="" class="TD-btn color1-bkg-bright white width-full" >Details</button>';

				infoWindow.setContent(
				    '<a class="color1-medium" href="#/tab/map/place/'+place.id+'">'
				    +'<h2 class="text-condensed color1-dark">'+marker.title+'</h2>'
				    + html
				    +'</a>'
				    );
				infoWindow.open($scope.map, marker);
				});
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