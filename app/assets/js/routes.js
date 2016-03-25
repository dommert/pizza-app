webApp.config(['$urlRouterProvider', '$stateProvider', 
    function($urlRouterProvider, $stateProvider) {
      $urlRouterProvider.otherwise('/');
        $stateProvider
          .state('home', {
            url: '/',
            templateUrl: 'templates/partials/frontpage.html',
            controller: 'mainCtrl'
          })

          .state('pizzas', {
            url: '/pizzas',
            templateUrl: 'templates/partials/pizzas.html',
            controller: 'pizzasCtrl'
          })

          .state('pizza', {
            url: '/pizza/:id',
            templateUrl: 'templates/partials/pizza.html',
            controller: 'mainCtrl'
          })

          .state('newPizza', {
            url: '/newPizza',
            templateUrl: 'templates/partials/newPizza.html',
            controller: 'mainCtrl'
          })

          .state('toppings', {
            url: '/toppings',
            templateUrl: 'templates/partials/toppings.html',
            controller: 'toppingsCtrl'
          }) 

          .state('about', {
            url: '/about',
            templateUrl: 'templates/partials/about.html',
            controller: 'mainCtrl'
          });
  }]);