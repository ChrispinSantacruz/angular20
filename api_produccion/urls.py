from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ContentViewSet, RatingViewSet, login_view

router = DefaultRouter()
router.register(r'contents', ContentViewSet)
router.register(r'ratings', RatingViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('login/', login_view),  # Ruta para la vista de inicio de sesión
]
