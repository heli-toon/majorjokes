from django.urls import path
from .views import *

urlpatterns = [
    path("", home, name="home"),
    path('get-joke', get_joke, name='get_joke')
]