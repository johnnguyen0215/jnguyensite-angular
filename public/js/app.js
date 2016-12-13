/**
 * Created by John on 12/4/2016.
 */

var app = angular.module('jnguyensite',
	[
		'ui.router',
		'ui.bootstrap',
		'MainController',
		'MainDirectives',
		'ngAnimate',
    'duScroll'
	]
);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider, $window) {
	$urlRouterProvider.otherwise('home');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: './views/main.html'
		});

	$locationProvider.html5Mode(true);

});