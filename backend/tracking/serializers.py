from rest_framework import serializers
from .models import CredentialSubmission


class CredentialSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = CredentialSubmission
        fields = [
            "id",
            "user",
            "campaign",
            "submitted_username",
            "timestamp",
        ]
        read_only_fields = ["id", "timestamp"]