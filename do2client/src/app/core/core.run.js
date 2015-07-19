'use strict';

angular.module('do2.core')

.run(function(localeFactory, $translate) {

	setUserLang();

	function setUserLang() {
		$translate.use(localeFactory.getCurrentLanguage());
	}
});
