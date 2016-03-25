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
            url: '/',
            templateUrl: 'templates/partials/pizzas.html',
            controller: 'mainCtrl'
          })
          .state('toppings', {
            url: '/',
            templateUrl: 'templates/partials/toppings.html',
            controller: 'mainCtrl'
          })
          .state('pizza', {
            url: '/pizza/:id',
            templateUrl: 'templates/partials/pizza.html',
            controller: 'mainCtrl'
          })
          .state('newPizza', {
            url: '/',
            templateUrl: 'templates/partials/newPizza.html',
            controller: 'mainCtrl'
          })                                        
          .state('about', {
            url: '/about',
            templateUrl: 'templates/partials/about.html',
            controller: 'mainCtrl'
          });
  }
]);