angular.module('do2.core')
.constant('do2config', {
	'SERVER': {
		DEV: 'http://127.0.0.1:8000',
		PROD: 'http://api.dotaonly.com'
	},
	'FRESH_TIME': 180000
});
