'use strict';

// available modules :
// 'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap
angular.module('do2.live', [])
	.config(function ($stateProvider) {
		$stateProvider
		.state('live', {
			url: '/',
			views: {
				'': {templateUrl: 'app/live/live-index.html'},
				'leftPanel': {
					template: 'leftPanel'
				},
				'streamContainer': {
					template: '<h1>Hi</h1>'
				}
			}
		});
	});
