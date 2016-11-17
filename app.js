(function () {
  'use strict';

angular.module('MyApp', ['ui.router', 'angular-owl-carousel', 'ngAnimate', 'ngCookies']).

config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$compileProvider',

	function($stateProvider, $urlRouterProvider, $locationProvider, $compileProvider) {
		$locationProvider.html5Mode(true);
		$compileProvider.debugInfoEnabled(false);
		$urlRouterProvider.otherwise("/");

		$stateProvider
			.state('home', {
				url: "/",
				views: {
					'': {
						templateUrl: 'Modules/HomeMod/HomeView.html'
					},
					'Body@home': {
						templateUrl: 'Modules/HomeMod/Body.html'
					}
				},
				controller: 'HomeCtrl'
			});
	}
]);

}());
