'use strict';

angular.module('do2.live').controller('StreamContainerCtrl', StreamContainerCtrl);

function StreamContainerCtrl($scope, streamListFactory) {
	angular.extend($scope, {
		allowedDropType: ['liveBox', 'streamItem'],
		itemType: 'liveBox',
		watchingList: []
	});

	$scope.watchingList = [1, 2, 3, 4];
}
