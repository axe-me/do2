'use strict';

angular.module('do2.live').controller('StreamContainerCtrl', StreamContainerCtrl);

function StreamContainerCtrl($scope, streamListFactory) {
	angular.extend($scope, {
		gridAllowedDropType: ['boxItem', 'streamItem'],
		itemType: 'boxItem',
		streamBoxList: streamListFactory.streamBoxList,
		isDropable: isDropable,
		toggle: streamListFactory.toggle
	});

	streamListFactory.openPanel();

	function isDropable() {
		return $scope.streamBoxList.length === 9;
	}
}
