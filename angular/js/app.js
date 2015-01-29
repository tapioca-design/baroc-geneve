var myApp = angular.module("myApp", 
	["ngRoute", "appControllers"]);

myApp.run(function($rootScope) {
	console.log("myApp.run ben ouais");
});

var appControllers = angular.module("appControllers", []);

myApp.config(["$routeProvider", function($routeProvider) {
	//console.log("myApp.config");
	$routeProvider.
	when("/login", {
		templateUrl: "views/login.html",
		controller: "RegistrationController"
	}).
	when("/register", {
		templateUrl: "views/register.html",
		controller: "RegistrationController"
	}).
	when("/meetings", {
		templateUrl: "views/meetings.html",
		controller: "MeetingsController"
	}).
	otherwise({
		redirectTo: "/login"
	});
}]);

