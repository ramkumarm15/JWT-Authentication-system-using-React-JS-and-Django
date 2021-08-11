from django.urls import path

from .views import UserProfile

urlpatterns = [
    path('user/<int:pk>/', UserProfile.as_view())
]
