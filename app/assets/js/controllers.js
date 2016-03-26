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
});

// ------ Pizzas Controller  ---------> 
webApp.controller('pizzasCtrl', function($scope, $http){
    $http.get("https://pizzaserver.herokuapp.com/pizzas", { cache: true})
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
webApp.controller('newPizzaCtrl', function($scope, $http, $location){
	$scope.formData = {};

	$scope.newPizzaForm = function() {
		$scope
		$http({
			method : 'POST',
			url : 'https://pizzaserver.herokuapp.com/pizzas',
			dataType : 'json',
			data : {name: $scope.name,
					description: $scope.description}
		})
		.success(function(data){
			if (data.errors) {
				$scope.errorName = data.errors.name;
			}
			$scope.newPizzaId = data.id;
			$scope.newPizzaForm = 2; 

			//$location.path('/pizzas');

		})
	};
});