'use strict';

angular.module('do2.live')
.controller('streamBoxCtrl', streamBoxCtrl)
.directive('streamBox', function() {
	return {
		restrict: 'E',
		scope: {
			boxData: '='
		},
		controller: 'streamBoxCtrl',
		templateUrl: 'app/live/stream-box.html'
	};
});


function streamBoxCtrl($scope) {

	angular.extend($scope, {
		getUrl: getUrl
	});

	function getUrl() {
		var data = $scope.boxData;
		console.log(data);
		if (data.site === 'douyu')
			return "http://staticlive.douyutv.com/common/share/play.swf?room_id=" + data.channel_id;
		else if (data.site === 'zhanqi') 
			return "http://www.zhanqi.tv/live/embed?roomId=" + data.channel_id;
		else if (data.site === 'huomao') 
			return "http://www.huomaotv.com/index.php?c=outplayer&live_id=" + data.channel_id + '/';
		else if (data.site === 'huya') 
			return "http://weblbs.yystatic.com/s/"+data.channel_id+"/"+data.sub_channel+"/huyacoop.swf";
		else
			return data.channel_id + '/embed';
	}

}
