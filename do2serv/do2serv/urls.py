from django.conf.urls import patterns, include, url
from django.contrib import admin
from streamAPI import views as api_views

urlpatterns = patterns('',
    url(r'^$',api_views.index),
    url(r'^stream_api/(\d)/$',api_views.getStreamLisBySite),
    url(r'^admin/', include(admin.site.urls)),
)