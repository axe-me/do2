'use strict';

angular.module('do2.core')
.factory('streamListFactory', function($http, lodash, $mdSidenav, do2config) {

	var serverRoot = do2config.SERVER.PROD;

	var apiUrl = {
		douyu: serverRoot + '/stream_api/0/?callback=JSON_CALLBACK',
		zhanqi: serverRoot + '/stream_api/1/?callback=JSON_CALLBACK',
		huomao: serverRoot + '/stream_api/2/?callback=JSON_CALLBACK',
		huya: serverRoot + '/stream_api/3/?callback=JSON_CALLBACK',
		twitch: serverRoot + '/stream_api/4/?callback=JSON_CALLBACK'
	};

	var streamBoxList = [];

	var streamListFactory = {
		getStreamListBySite: getStreamListBySite,
		streamBoxList: streamBoxList,
		toggle: toggle,
		openPanel: $mdSidenav('left').open,
		remove: remove
	};

	return streamListFactory;

	function getStreamListBySite(siteKey){
		return $http.jsonp(apiUrl[siteKey]);
	}

	function toggle() {
		$mdSidenav('left').toggle();
	}

	function remove(box) {
		lodash.remove(streamListFactory.streamBoxList, function(n) {
			if (box.site==='huya')
				return box.channel_id === n.channel_id && box.sub_channel === n.sub_channel;
			else 
				return box.site===n.site && box.channel_id === n.channel_id;
		});
	}

});
