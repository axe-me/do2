'use strict';

angular.module('do2.core', [])
	.config(function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
	})
	// http://www.google.com/design/spec/style/color.html#color-color-palette
	.config(function($mdThemingProvider) {
		$mdThemingProvider.theme('default')
				.primaryPalette('red', {
					'default': '400',
					'hue-1': '100',
					'hue-2': '600',
					'hue-3': 'A100'})
				.accentPalette('yellow', {
					'default': '400',
					'hue-1': '100',
					'hue-2': '600',
					'hue-3': 'A100'})
				.warnPalette('lime', {
					'default': '400',
					'hue-1': '100',
					'hue-2': '600',
					'hue-3': 'A100'})
				.backgroundPalette('grey', {
					'default': '600',
					'hue-1': '500',
					'hue-2': '700',
					'hue-3': '900'
				});
	});
