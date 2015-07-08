from django.shortcuts import render_to_response
from django.http import JsonResponse, HttpResponse
from django.template import RequestContext
from api_to_json import getJsonBySite
import json

def index(request):
	return render_to_response('index.html', context_instance=RequestContext(request))

def getStreamLisBySite(request, siteID):
	# site code:
	# 0 : Douyu
	# 1 : Zhanqi
	# 2 : Huomao
	# 3 : Huya
	# 4 : Twitch
	data = getJsonBySite(siteID)
	if 'callback' in request.GET:
		data = '%s(%s);' % (request.GET['callback'], json.dumps(data))
		return HttpResponse(data, "text/javascript")
	else:
		return JsonResponse(data, safe=True)