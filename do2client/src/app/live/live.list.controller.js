'use strict';

angular.module('do2.live').controller('LiveListCtrl', LiveListCtrl);

function LiveListCtrl($scope, streamListFactory, do2config, localeFactory, localStorageService) {
	angular.extend($scope, {
		allowedDropType: ['none'],
		itemType: 'streamItem',
		showStreamList: showStreamList,
		streamList: [],
		isChinese: localeFactory.isChinese,
		switchLang: localeFactory.switchLang
	});

	showStreamList('douyu');

	function isFresh(time) {
		return Date.now() - time < do2config.FRESH_TIME;
	}

	function showStreamList(key) {
		var siteData = localStorageService.get(key);
		if (siteData!==null && isFresh(siteData.lastUpdateTime)) {
			$scope.streamList = siteData.data;
		} else {
			streamListFactory.getStreamListBySite(key)
			.success(function (data) {
				siteData = {};
				siteData.lastUpdateTime = Date.now();
				siteData.data = data.streams;
				localStorageService.set(key, siteData);
				$scope.streamList = data.streams;
			});
		}
	}
	
}
