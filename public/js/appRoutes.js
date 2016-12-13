
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
  // home page
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainController as main'
    });

  $locationProvider.html5Mode(true);
}]);