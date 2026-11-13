from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny

from .models import CredentialSubmission
from .serializers import CredentialSubmissionSerializer


class CredentialSubmissionView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):

        username = request.data.get("username")
        campaign_id = request.data.get("campaign")

        if not username:
            return Response(
                {
                    "success": False,
                    "message": "Username or email is required."
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        if not campaign_id:
            return Response(
                {
                    "success": False,
                    "message": "Campaign is required."
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        submission = CredentialSubmission.objects.create(
            user=request.user if request.user.is_authenticated else None,
            campaign_id=campaign_id,
            submitted_username=username
        )

        serializer = CredentialSubmissionSerializer(submission)

        return Response(
            {
                "success": True,
                "message": "Training submission recorded.",
                "data": serializer.data
            },
            status=status.HTTP_201_CREATED
        )