myApp.controller("RegistrationController", 
	function($scope, $location){
	
	/*$scope.name = "Ray";
	$scope.$on("$viewContentLoaded", function(){
		console.log($scope.myform);
	});*/

	$scope.login = function () {
		$location.path("/meetings");
	}

	$scope.register = function () {
		$location.path("/meetings");
	}
});