var webApp = angular.module('webApp', ['ui.bootstrap', 'ui.router']);

webApp.controller('mainCtrl',
	function($scope){
		$scope.message = "Angular is working";
	});

webApp.controller('buttonCtrl', 
	function($scope){
		$scope.singleModel = 1;
    });

webApp.controller('toppingsCtrl', function($scope, $http) {
    $http.get("https://pizzaserver.herokuapp.com/toppings")
    .then(function(response) {
        $scope.toppings = response.data;
    })
});


webApp.controller('pizzasCtrl', function($scope, $http){
    $http.get("https://pizzaserver.herokuapp.com/pizzas")
    .then(function(response){
        $scope.pizzas = response.data;})
});
