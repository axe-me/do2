'use strict';

angular.module('do2.core')
.factory('streamListFactory', function($http, $interval, $mdSidenav, do2config) {

	var serverRoot = do2config.SERVER.DEV;

	var apiUrl = {
		douyu: serverRoot + '/stream_api/0/?callback=JSON_CALLBACK',
		zhanqi: serverRoot + '/stream_api/1/?callback=JSON_CALLBACK',
		huomao: serverRoot + '/stream_api/2/?callback=JSON_CALLBACK',
		huya: serverRoot + '/stream_api/3/?callback=JSON_CALLBACK',
		twitch: serverRoot + '/stream_api/4/?callback=JSON_CALLBACK'
	};

	var streamBoxList = [];
	var isPanelOpen = false;

	var streamListFactory = {
		getStreamListBySite: getStreamListBySite,
		streamBoxList: streamBoxList,
		toggle: toggle,
		isPanelOpen: $mdSidenav('left').isOpen,
		openPanel: $mdSidenav('left').open
	};

	return streamListFactory;

	function getStreamListBySite(siteKey){
		return $http.jsonp(apiUrl[siteKey]);
	}

	function toggle() {
		$mdSidenav('left').toggle();
	}
});
