'use strict';

angular.module('do2.live').controller('StreamContainerCtrl', StreamContainerCtrl);

function StreamContainerCtrl($scope, streamListFactory) {
	angular.extend($scope, {
		gridAllowedDropType: ['boxItem', 'streamItem'],
		itemType: 'boxItem',
		watchingList: []
	});

	$scope.watchingList = [
      {
        "label": "Item 10"
      },
      {
        "label": "Item 11"
      },
      {
        "label": "Item 12"
      },
      {
        "label": "Item 13"
      },
      {
        "label": "Item 14"
      },
      {
        "label": "Item 15"
      },
      {
        "label": "Item 16"
      }
    ];
}
