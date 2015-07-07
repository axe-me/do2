'use strict';

angular.module('do2.core')
.factory('streamListFactory', function($http) {

	var apiUrl = {
		douyu: 'http://www.douyutv.com/api/v1/live/3?offset=0&limit=100&client_sys=ios&aid=ios&callback=JSON_CALLBACK',
		zhanqi: 'http://www.zhanqi.tv/api/static/game.lives/10/20-1.json&callback=JSON_CALLBACK',
		huomao: 'http://api.huomaotv.com/index.php?m=api&c=mobile&a=channel_list&time=1435209905&page=1&gid=23&token=87e774472de993584bd791146c14251a&callback=JSON_CALLBACK',
		huya: 'http://phone.huya.com/api/game?gameId=7&page=0&callback=JSON_CALLBACK',
		twitch: 'https://api.twitch.tv/kraken/streams?game=dota%202&callback=JSON_CALLBACK'
	};

	var streamListFactory = {
		getRawStreamListBySite: getRawStreamListBySite
	};

	return streamListFactory;

	function getRawStreamListBySite(siteKey){
		return $http.jsonp(apiUrl[siteKey]);
	}
});
