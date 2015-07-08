'use strict';

angular.module('do2.live').controller('LiveCtrl', LiveCtrl);

function LiveCtrl($scope, streamListFactory) {
	angular.extend($scope, {
	});

	streamListFactory.getRawStreamListBySite('huomao')
		.success(function (data) {
			console.log(data);
		});
	
}
