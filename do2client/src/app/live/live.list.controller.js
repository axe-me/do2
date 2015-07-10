'use strict';

angular.module('do2.live').controller('LiveListCtrl', LiveListCtrl);

function LiveListCtrl($scope, streamListFactory) {
	angular.extend($scope, {
		showStreamList: showStreamList,
		streamList: []
	});

	function showStreamList(key) {
		streamListFactory.getStreamListBySite(key)
		.success(function (data) {
			console.log('got data for ' + key);
			$scope.streamList = data.streams;
			console.log($scope.streamList);
		});
	}
	
	
}
