'use strict';

angular.module('do2.core')
.factory('streamListFactory', function($http) {

	var server_root = 'http://127.0.0.1:8000';

	var apiUrl = {
		douyu: server_root + '/stream_api/0/?callback=JSON_CALLBACK',
		zhanqi: server_root + '/stream_api/1/?callback=JSON_CALLBACK',
		huomao: server_root + '/stream_api/2/?callback=JSON_CALLBACK',
		huya: server_root + '/stream_api/3/?callback=JSON_CALLBACK',
		twitch: server_root + '/stream_api/4/?callback=JSON_CALLBACK'
	};

	var streamListFactory = {
		getStreamListBySite: getStreamListBySite
	};

	return streamListFactory;

	function getStreamListBySite(siteKey){
		return $http.jsonp(apiUrl[siteKey]);
	}
});
