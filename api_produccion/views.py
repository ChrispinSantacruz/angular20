from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .models import Content, Rating
from .serializers import ContentSerializer, RatingSerializer
from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.contrib.auth import authenticate

class ContentViewSet(viewsets.ModelViewSet):
    queryset = Content.objects.all()
    serializer_class = ContentSerializer
    permission_classes_by_action = {'create': [IsAdminUser],
                                    'update': [IsAdminUser],
                                    'partial_update': [IsAdminUser],
                                    'destroy': [IsAdminUser],
                                    'list': [IsAuthenticated],
                                    'retrieve': [IsAuthenticated]}

    def get_permissions(self):
        return [permission() for permission in self.permission_classes_by_action.get(self.action, [IsAuthenticated])]

class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer
    permission_classes = [IsAuthenticated]

@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            is_admin = user.groups.filter(name='administrador').exists()
            return JsonResponse({'isAdmin': is_admin})
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=400)
    return JsonResponse({'error': 'Only POST requests are allowed'}, status=400)
