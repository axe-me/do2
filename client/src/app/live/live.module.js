'use strict';

// available modules :
// 'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap
angular.module('do2.live', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'app/live/live-index.html',
		//controller: 'LiveCtrl',
		views: {
			'leftPanel': {
				template: 'live.leftPanel'
			},
			'box': {
				template: 'live.box'
			}
		}
	});

	$urlRouterProvider.otherwise('/');
});
