var webApp = angular.module('webApp', ['ui.bootstrap', 'ui.router','angular-loading-bar', 'ngAnimate']);

webApp.controller('mainCtrl',
	function($scope){
		$scope.message = "Angular is working";
	});
