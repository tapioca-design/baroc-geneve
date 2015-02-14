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
    return "<span class='dayNumber'>"+date.getDate()+"</span>";
}

                        $scope.places = places;
                        // console.log("date du premier Place de la liste, il faut virer ceux qui n ont pas de Performance");
                        
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


                            
                            var monthsWithPerformance = new Object();
                            //gather months
                            for (var i = 0; i < place.performances.length; i++) {

                                // console.log("i="+i);
                                var performance = place.performances[i];
                                // console.log("dateRawString:"+performance.date_performance);
                                var d = performance.date_performance.split(/[^0-9]/);
                                var date = new Date(d[0],d[1]-1,d[2],d[3],d[4],d[5] );
                                // console.log("date:"+date);
                                var month = date.getMonth();

                                var dayNumber = date.getDate();
                                // console.log("dayNumber = "+dayNumber);

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
                                    //monthsWithPerformance[dateRefMonths[month]]= new Array("bububu");
                                    
                                    
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




                                // console.log("monthsWithPerformance");
                                // console.log(monthsWithPerformance);


                                var html = "";
                                html += "<div class='date-resume'>";
                                for (var key in monthsWithPerformance) {
                                 
                                    // alert(key + " -> " + monthsWithPerformance[key]);
                                    html += "<div class='month'>";
                                    html += key;
                                    html += "</div>";
                                    for (var i = 0; i < monthsWithPerformance[key].length; i++) {
                                        // console.log("monthsWithPerformance[key]");
                                        // console.log(monthsWithPerformance[key]);
                                        html += "<span class='day days-list-element text-light text-bold '>";
                                        //html += "i:"+i
                                        html += monthsWithPerformance[key][i];
                                        html += "</span>";
                                    }
                                                                  }
                                html += "</div>";

                                

                                // console.log("monthsWithPerformance jan ");
                                // console.log(monthsWithPerformance["January"]);

                                // console.log("monthsWithPerformance feb ");
                                // console.log(monthsWithPerformance["February"]);

                                // console.log("monthsWithPerformance mar");
                                // console.log(monthsWithPerformance["March"]);

                            infoWindow.setContent(
                                '<a class="red-dark" href="#/place/'+place.id+'">'
                                +'<h2 class="text-condensed">'+marker.title+'</h2>'+concertsList
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


