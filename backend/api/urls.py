from django.urls import path
from api.views import *

urlpatterns = [
    path('shoes', ShoesView.as_view(), name="shoes")
]
