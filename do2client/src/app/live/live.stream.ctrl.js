'use strict';

angular.module('do2.live').controller('StreamContainerCtrl', StreamContainerCtrl);

function StreamContainerCtrl($scope, streamListFactory) {
	angular.extend($scope, {
		gridAllowedDropType: ['boxItem', 'streamItem'],
		itemType: 'boxItem',
		watchingList: [],
		boxStyle: boxStyle
	});

	$scope.watchingList = [
		{
			"label": "Item 10"
		}];

	function boxStyle() {
		return 'box-' + $scope.watchingList.length;
	}
}
