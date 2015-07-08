'use strict';

angular.module('do2.core')
.factory('streamListFactory', function($http) {

	var apiUrl = {
		douyu: 'http://127.0.0.1:8000/stream_api/0/?callback=JSON_CALLBACK',
		zhanqi: 'http://127.0.0.1:8000/stream_api/1/?callback=JSON_CALLBACK',
		huomao: 'http://127.0.0.1:8000/stream_api/2/?callback=JSON_CALLBACK',
		huya: 'http://127.0.0.1:8000/stream_api/3/?callback=JSON_CALLBACK',
		twitch: 'http://127.0.0.1:8000/stream_api/4/?callback=JSON_CALLBACK'
	};

	var streamListFactory = {
		getRawStreamListBySite: getRawStreamListBySite
	};

	return streamListFactory;

	function getRawStreamListBySite(siteKey){
		return $http.jsonp(apiUrl[siteKey]);
	}
});
