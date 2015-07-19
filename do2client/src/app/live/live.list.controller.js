'use strict';

angular.module('do2.live').controller('LiveListCtrl', LiveListCtrl);

function LiveListCtrl($scope, streamListFactory, localeFactory) {
	angular.extend($scope, {
		allowedDropType: ['none'],
		itemType: 'streamItem',
		showStreamList: showStreamList,
		streamList: [],
		isChinese: localeFactory.isChinese,
		switchLang: localeFactory.switchLang
	});

	showStreamList('douyu');

	function showStreamList(key) {
		streamListFactory.getStreamListBySite(key)
		.success(function (data) {
			$scope.streamList = data.streams;
		});
	}
	
}
