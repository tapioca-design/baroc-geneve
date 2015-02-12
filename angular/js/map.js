myApp.controller('MapController', ['$rootScope','$scope','$http', "$routeParams",'$location','Data','Search','Const', function($rootScope,$scope,$http,$routeParams,$location, Data, Search, Const) { 


      //Data.headerTitle="Class Live Ge";
      Data.headerTitle=Const.appNameFr;


      //Data
var cities = [
    {
        city : 'Victoria Hall',
        desc : 'This is the best city in the world!',
        lat : 46.201433,
        long : 6.141130
        //46.201433, 6.141130
    },
    {
        city : 'Grand theatttre',
        desc : 'This city is aiiiiite!',
        lat : 46.201763,
        long : 6.142680

        //46.201763, 6.142680
    },
    {
        city : 'Forum Meyrin',
        desc : 'This is the second best city in the world!',
        lat : 46.232446,
        long : 6.081378
        //46.232446, 6.081378
    },
    {
        city : 'Comédie de Genève',
        desc : 'This is the second best city in the world!',
        lat : 46.197285,
        long : 6.143847
        //46.232446, 6.081378
    },
    {
        city : 'BFM',
        desc : 'This is the second best city in the world!',
        lat : 46.204654,
        long : 6.137092
        //46.232446, 6.081378
    }

];
      
      var mapOptions = {
        zoom: 14,
        //46.203129, 6.144861
        //46.203129, 6.144861
        center: new google.maps.LatLng(46.203129, 6.144861),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.markers = [];
    
    var infoWindow = new google.maps.InfoWindow();
    
    var createMarker = function (info){
        
        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.city
        });
        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
        
        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
            infoWindow.open($scope.map, marker);
        });
        
        $scope.markers.push(marker);
        
    }  
    
    for (i = 0; i < cities.length; i++){
        createMarker(cities[i]);
    }

    $scope.openInfoWindow = function(e, selectedMarker){
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    }



 }]);


