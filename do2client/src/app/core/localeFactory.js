'use strict';

angular.module('do2.core')
.factory('localeFactory', function($window, $translate) {

	function getCurrentLanguage() {
		return isChinese() ? 'zh' : 'en';
	}

	function isChinese() {
		var navigatorLanguage = $window.navigator.userLanguage || $window.navigator.language;
		return navigatorLanguage.match(/zh/gi);
	}

	function switchLang(lang) {
		if (lang === 'zh')
			$translate.use('zh');
		else
			$translate.use('en');
	}

	return {
		getCurrentLanguage: getCurrentLanguage,
		isChinese: isChinese,
		switchLang: switchLang
	};
});
