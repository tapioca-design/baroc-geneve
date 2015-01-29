myApp.controller("MeetingsController", 
	function($scope, $http){
		var url="http://localhost/model/meetings.json";
		
		$http.get(url).success(function(response) { 
			//console.log(response);
			$scope.meetings = response;
			//console.log($scope.meetings);
			//$scope.meetings = meetings.$asObject();
			//
		});
	});