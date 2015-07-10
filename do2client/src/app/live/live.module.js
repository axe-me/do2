'use strict';

// available modules :
// 'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap
angular.module('do2.live', [])
	.config(function ($stateProvider) {
		$stateProvider
		.state('live', {
			url: '/',
			views: {
				'': { templateUrl: 'app/live/live.index.html' },
				'leftPanel@live': {
					templateUrl: 'app/live/live.leftPanel.html',
					controller: 'LiveListCtrl'
				},
				'streamContainer@live': {
					template: '<md-button>stream box</md-button>'
				}
			}
		});
	});
