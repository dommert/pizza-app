webApp.config(['$urlRouterProvider', '$stateProvider', 
    function($urlRouterProvider, $stateProvider) {
      $urlRouterProvider.otherwise('/');
        $stateProvider
          .state('home', {
            url: '/',
            templateUrl: 'templates/partials/frontpage.html',
            controller: 'mainCtrl'
          })
          .state('about', {
            url: '/about',
            templateUrl: 'templates/partials/about.html',
            controller: 'mainCtrl'
          });
  }
]);