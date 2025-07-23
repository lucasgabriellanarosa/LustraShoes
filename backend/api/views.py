from django.shortcuts import render
from rest_framework.views import APIView
from .models import *
from .serializer import *
from rest_framework.response import Response

class ShoesView(APIView):
    def get(self, request):
        output_list = [
            {
                "id": item.id,
                "name": item.name,
                "price": item.price,
                "discount_value": item.discount_value,
                "description": item.description
            }
            for item in Shoes.objects.all()
        ]
        
        # print(output_list)
        return Response(output_list)
    
    def post(self, request):
        serializer = ShoesSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)