from rest_framework import generics
from .models import EmailTemplate
from .serializers import EmailTemplateSerializer


class EmailTemplateListCreateView(generics.ListCreateAPIView):
    queryset = EmailTemplate.objects.all()
    serializer_class = EmailTemplateSerializer


class EmailTemplateDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = EmailTemplate.objects.all()
    serializer_class = EmailTemplateSerializer

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Campaign
from .serializers import CampaignCreateSerializer


class CampaignCreateView(APIView):

    def post(self, request):

        name = request.data.get("name")
        scheduled_date = request.data.get("scheduled_date")

        if not name:
            return Response(
                {"success": False, "error": "Campaign name is required."},
                status=status.HTTP_400_BAD_REQUEST
            )

        campaign_data = {
            "name": name,
            "scheduled_date": scheduled_date,
            "is_active": True
        }

        serializer = CampaignCreateSerializer(data=campaign_data)

        if serializer.is_valid():
            campaign = serializer.save()

            return Response(
                {
                    "success": True,
                    "message": "Campaign created successfully.",
                    "campaign": serializer.data
                },
                status=status.HTTP_201_CREATED
            )

        return Response(
            {
                "success": False,
                "errors": serializer.errors
            },
            status=status.HTTP_400_BAD_REQUEST
        )