'use strict';

// available modules :
// 'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap
angular.module('do2.live', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('live', {
        url: '/',
        views: {
        	'': {templateUrl: 'app/live/live-index.html'},
        	'leftPanel': {
        		template: 'leftPanel'
        	},
        	'box': {
        		template: 'box'
        	}
        }
      });

    $urlRouterProvider.otherwise('/');
  });
