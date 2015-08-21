app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .when('/show/:id', {
        templateUrl: 'partials/show.html',
        controller: 'ShowController'
      })
      .otherwise({
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      // // use the HTML5 History API
        $locationProvider.html5Mode(true);
});
