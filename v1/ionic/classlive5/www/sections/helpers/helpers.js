starter.factory('Const', function($location){
  var baseUrlInner;
    //baseUrlInner= "http://tapiocadesign.com/_CLASSLIVE/v1";
    baseUrlInner= "http://localhost/v1";
    return {
      baseUrl:baseUrlInner, 
      appNameFr:"Classique live Genève"
    };
  });
starter.factory('Utils', function($location){
  return {
    eliminateDuplicates: function(arr){
      // console.log("eliminateDuplicates");
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
  };
});
starter.factory('Data', function($location){
  return {
    headerTitle: '', 
    filteredConcerts:"", 
    searchAllowed:1, 
    searchActive:0,
    concertsNoResultAllowed:0,
    loadingActive:1,
  };
});
starter.factory('Links', function($rootScope, $location){
  return {
    vava:"ben voilà vavs",
    fnfn:function(){
      $rootScope.d("coco ");
    },
    relative:function ( path ) {
      $rootScope.d("relative "+path);
      $location.path(path);
    },
    absolute:function ( path ) {
      $rootScope.d("absolute "+path);
      window.open(path,"_system");
    }
  };
});
starter.factory('Navigation', function(){
  return {
    concerts:"off", 
    map:"off", 
    places:"off",
  };
});
starter.factory('Search', function(){
  return {term: ''};
});
starter.factory('Concert', function(){
  return {term: ''};
});
starter.factory('Calendar', function(){
  return {
    days: new Array("Lun","Mar","Mer","Jeu","Ven","Sam","Dim"),
    months: new Array("Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"),
    dateFromString:function(s){
      var d = s.split(/[^0-9]/);
      return new Date(d[0],d[1]-1,d[2],d[3],d[4],d[5] );
    }
  };
});
starter.factory('API', function($rootScope, $http, Const){
  var urlApi=Const.baseUrl+'/symfony/web/api/';
  var dataFactory = {};
  dataFactory.worksOrderedByFirstPerformance = function () {
    var url = urlApi+"city/1/worksOrderedByFirstPerformance";
    return $http.get(url);
  };
  dataFactory.work = function (workId) {
    var url = urlApi+"work/"+workId;
    return $http.get(url);
  };
  dataFactory.workPerformances = function (workId) {
    var url = urlApi+'work/'+workId+'/performances';
    return $http.get(url);
  };
  return dataFactory;
});


// starter.factory('Image', function($http, Const){
// // $rootScope.getImagePath = function (object,folder,name_url,filename,callback) {
//                 var localImagesPath = "img/";
//                 var serverImagesPath = Const.baseUrl+"/symfony/web/bundles/tapiocadesignclasslivegnv/images/";
//                 //works landscape suffix
//                     var pathSuffix = folder+"/"+name_url+"/"+filename;
//                     //if img exist locally, load it, otherwise get in on server
//                     // serverPath
//                     var localImage = localImagesPath+pathSuffix;
//                     var distantImage = serverImagesPath+pathSuffix;
//                     $http.get(localImage).success(function(data, status, headers, config) {
//                         //img exists locally
//                         object.landscapeBkgPath = localImage;
//                         callback(object);
//                          // localImage;
//                     }).error(function(data, status, headers, config) {
//                         //img does not exist locally, load the distant one
//                          object.landscapeBkgPath = distantImage;
//                         callback(object);
//                     });
//             // };
// });



starter.factory('Map', function($rootScope, Utils){
  return {
    createMarker: function($scope, place, Calendar, stateType, infoWindow){
        // $rootScope.d("place.name_fr="+place.name_fr);
        //Map.createMarker($rootScope, place, Calendar, stateType, infoWindow);
        $rootScope.getImagePath(place,"places",place.name_url,"map-markers.png",
          function (glbkgp_callback_arg) {

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
                                        
                                        for (var key in monthsWithPerformance) {
                                          if (monthsWithPerformance.hasOwnProperty(key)) {
                                            monthsWithPerformance[key] = Utils.eliminateDuplicates(monthsWithPerformance[key]);
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
                                    //next element closes google.maps.event.addListener(marker, 'click'
                                  });
$scope.markers.push(marker);
//next element closes $rootScope.getImagePath callback
});
//next element closes createMarker
}
};

});















