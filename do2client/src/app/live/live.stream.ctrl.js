'use strict';

angular.module('do2.live').controller('StreamContainerCtrl', StreamContainerCtrl);

function StreamContainerCtrl($scope, streamListFactory) {
	angular.extend($scope, {
		gridAllowedDropType: ['boxItem', 'streamItem'],
		itemType: 'boxItem',
		streamBoxList: streamListFactory.streamBoxList,
		boxStyle: boxStyle
	});

	function boxStyle() {
		return 'box-' + $scope.streamBoxList.length;
	}
}
