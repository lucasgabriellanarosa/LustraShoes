from rest_framework import serializers
from .models import *

class ShoesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shoes
        fields = "__all__"