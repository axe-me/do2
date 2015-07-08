#!/usr/bin/env python
import urllib2
import json

api_list = ['http://www.douyutv.com/api/v1/live/3?offset=0&limit=20&client_sys=ios&aid=ios',
			'http://www.zhanqi.tv/api/static/game.lives/10/20-1.json',
			'http://api.huomaotv.com/index.php?m=api&c=mobile&a=channel_list&time=1435209905&page=1&gid=23&token=87e774472de993584bd791146c14251a',
			'http://phone.huya.com/api/game?gameId=7&page=0',
			'https://api.twitch.tv/kraken/streams?game=dota%202']

def getRawJson(idx):
	url = api_list[idx]
	return json.load(urllib2.urlopen(url))

def getJsonBySite(id):
	id = int(id)
	raw_json = getRawJson(id)
	return [douyuJson, zhanqiJson, huomaoJson, huyaJson, twitchJson][id](raw_json)

def douyuJson(raw):
	data_set = raw['data']
	stream_details = lambda s: {'anchor': s['nickname'],
								'title': s['room_name'],
								'img': s['room_src'],
								'site': 'douyu',
								'spectator_num': s['online'],
								'channel_id': s['room_id']}
	return { 'streams': [ stream_details(stream) for stream in data_set] }

def zhanqiJson(raw):
	data_set = raw['data']['rooms']
	stream_details = lambda s: {'anchor': s['nickname'],
								'title': s['title'],
								'img': s['bpic'],
								'site': 'zhanqi',
								'spectator_num': s['online'],
								'channel_id': s['code']}
	return { 'streams': [ stream_details(stream) for stream in data_set] }

def huomaoJson(raw):
	data_set = raw['data']['list']
	stream_details = lambda s: {'anchor': s['username'],
								'title': s['channel'],
								'img': s['image'],
								'site': 'huomao',
								'spectator_num': s['views'],
								'channel_id': s['cid']}
	return { 'streams': [ stream_details(stream) for stream in data_set] }

def huyaJson(raw):
	data_set = raw['data']
	stream_details = lambda s: {'anchor': s['liveNick'],
								'title': s['liveName'],
								'img': s['snapshot'],
								'site': 'huya',
								'spectator_num': s['users'],
								'channel_id': s['sid'],
								'sub_channel': s['subSid']}
	return { 'streams': [ stream_details(stream) for stream in data_set] }

def twitchJson(raw):
	data_set = raw['streams']
	stream_details = lambda s: {'anchor': s['channel']['display_name'],
								'title': s['channel']['status'] or 'straming',
								'img': s['preview']['medium'],
								'site': 'twitch',
								'spectator_num': s['channel']['views'],
								'channel_id': s['channel']['url']}
	return { 'streams': [ stream_details(stream) for stream in data_set] }
