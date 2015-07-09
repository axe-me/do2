'use strict';

// available modules :
// 'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap
angular.module('do2.live', [])
	.config(function ($stateProvider) {
		$stateProvider
			.state('live', {
				url: '/',
				templateUrl: 'app/live/live-index.html',
				controller: 'LiveCtrl'
			});
	});
