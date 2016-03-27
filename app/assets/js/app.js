// Dommert's Pizza App 2016 
// Dommert@Gmail.com  
// github.com/dommert/pizza-app
// App


var webApp = angular.module('webApp', ['ui.bootstrap', 'ui.router','angular-loading-bar', 'ngAnimate', 'angular.filter']);

webApp.controller('mainCtrl',
	function($scope){
		$scope.message = "Angular is working";
	});
