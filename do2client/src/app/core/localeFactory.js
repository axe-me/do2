'use strict';

angular.module('do2.core')
.factory('localeFactory', function($window) {

	function getCurrentLanguage() {
		return isChinese() ? 'zh' : 'en';
	}

	function isChinese() {
		var navigatorLanguage = $window.navigator.userLanguage || $window.navigator.language;
		console.log(navigatorLanguage);
		return navigatorLanguage.match(/zh/gi);
	}

	return {
		getCurrentLanguage: getCurrentLanguage,
		isChinese: isChinese
	};
});
