from rest_framework import serializers
from .models import EmailTemplate


class EmailTemplateSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailTemplate
        fields = [
            'id',
            'campaign',
            'subject',
            'body',
            'sender_name',
            'sender_email',
        ]
        from rest_framework import serializers
from .models import Campaign


class CampaignCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Campaign
        fields = [
            "id",
            "name",
            "scheduled_date",
            "is_active",
        ]