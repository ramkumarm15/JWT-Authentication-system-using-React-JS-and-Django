from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import UserAccount
from .serializers import UserCreateSerializer


class UserProfile(APIView):
    permission_classes = [AllowAny, ]

    def get(self, request, pk, Format=None):
        # print(pk)
        user = UserAccount.objects.get(id=pk)
        serializer = UserCreateSerializer(user, many=False)
        return Response(serializer.data)
