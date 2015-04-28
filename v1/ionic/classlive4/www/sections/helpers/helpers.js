starter.factory('Const', function($location){
    var baseUrlInner;
    //baseUrlInner= "http://tapiocadesign.com/_CLASSLIVE/v1";
    baseUrlInner= "http://localhost/v1";
    return {
      baseUrl:baseUrlInner, 
      appNameFr:"Classique live Genève"
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
        var url = urlApi + "city/1/worksOrderedByFirstPerformance";
        // $rootScope.d("Const.baseUrl="+Const.baseUrl);
        // $rootScope.d("urlApi="+urlApi);
        // $rootScope.d("url="+url);
        return $http.get(url);
        //city/1/worksOrderedByFirstPerformance
    };
    return dataFactory;
});





