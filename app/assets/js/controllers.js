// Dommert's Pizza App 2016
// Controllers

// ------ toppings Controller  ---------> 
webApp.controller('toppingsCtrl', function($scope, $http) {
    $http.get("https://pizzaserver.herokuapp.com/toppings")
    .then(function(response) {
        $scope.toppings = response.data;
    })
});

// ------ newTopping Controller  ---------> 
webApp.controller('newToppingCtrl', function($scope, $http, $location){
	$scope.formData = {};
	$scope.toppingForm = function() {
		$http({
			method : 'POST',
			url : 'https://pizzaserver.herokuapp.com/toppings',
			dataType : 'json',
			data : {name: $scope.name}
		})
		.success(function(data){
			if (data.errors) {
				$scope.errorName = data.errors.name;
			}
			$location.path('/');
		})
	};

	$scope.formToppings = {};
});

// ------ Pizzas Controller  ---------> 
webApp.controller('pizzasCtrl', function($scope, $http){
    $http.get("https://pizzaserver.herokuapp.com/pizzas")
    .then(function(response){
        $scope.pizzas = response.data;
    });
 });

// ------ Pizza Controller  ---------> 
webApp.controller('pizzaCtrl', function($stateParams, $scope, $http){
	$scope.pizzaId = $stateParams.pizzaId;
	$scope.pizzaName = $stateParams.pizzaName;
	$scope.pizzaDesc = $stateParams.pizzaDesc;
	
	$http.get("https://pizzaserver.herokuapp.com/pizzas/"+ $stateParams.pizzaId + "/toppings")
    .then(function(response){
        $scope.toppings = response.data;
    });

   $http.get("https://pizzaserver.herokuapp.com/pizzas")
    .then(function(response){
        $scope.pizzas = response.data;
    });
   $scope.orderPizza = function(text) {
  alert(text);
};

});

// ------ newPizza Controller  ---------> 
webApp.controller('newPizzaCtrl', ['$scope', '$http', '$location',  function($scope, $http, $location){
	$scope.formData = {};
	$scope.formPart = false;
	$scope.toppings_id = [];
	$scope.newToppings = {};
	$scope.console = console; 
	
	$scope.newPizzaForm = function() {
		$http({
			method : 'POST',
			url : 'https://pizzaserver.herokuapp.com/pizzas',
			dataType : 'json',
			data : {pizza: { name: $scope.name,
					description: $scope.description}}
		})
		.success(function(data){
			if (data.errors) {
				$scope.errorName = data.errors.name;
			}
			$scope.newPizzaId = data.id;
			$scope.formPart = true;
			//$location.path('/pizzas');
		});
	};

$scope.submitToppings = function() {
	console.log('id: '+ $scope.toppings_id)
	
	$scope.newPizzaToppings = $scope.toppings_id.filter(function(n){ return n != undefined });
	//$scope.newPizzaToppings = angular.toJson($scope.newPizzaToppings);
	

	for (i = 0; i < $scope.newPizzaToppings.length; i++) {
    	if (i < 1 ) { $scope.toppingTest += " , "; };
    	$scope.myTopping = $scope.newPizzaToppings[i];
    	
			$http({
			method : 'POST',
			url : 'https://pizzaserver.herokuapp.com/pizzas/'+ $scope.newPizzaId +'/toppings/',
			dataType : 'json',
			data : {topping_id: $scope.myTopping }
		})
		.success(function(data){
			if (data.errors) {
				$scope.errorName = data.errors.name;
			}			
			$location.path('/pizzas');
		});
		};
	};


}]);