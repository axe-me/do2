'use strict';


// available modules :
// 'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ngMaterial'
angular.module('do2', ['ui.router',
						'ngMaterial',
						'ngSanitize',
						'LocalStorageModule',
						'pascalprecht.translate',
						'ngLodash',
						'dndLists',
						'do2.core',
						'do2.live']);
