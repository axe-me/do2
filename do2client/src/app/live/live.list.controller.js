'use strict';

angular.module('do2.live').controller('LiveListCtrl', LiveListCtrl);

function LiveListCtrl($scope, streamListFactory) {
	angular.extend($scope, {
		allowedDropType: ['none'],
		itemType: 'streamItem',
		showStreamList: showStreamList,
		streamList: []
	});

	function showStreamList(key) {
		streamListFactory.getStreamListBySite(key)
		.success(function (data) {
			console.log(data.streams);
			$scope.streamList = data.streams;
		});
	}
	
	
}
