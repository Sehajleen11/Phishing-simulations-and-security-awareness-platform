from django.db import models
from users.models import CustomUser
from campaigns.models import Campaign


class EmailEvent(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    campaign = models.ForeignKey(Campaign, on_delete=models.CASCADE)
    event_type = models.CharField(max_length=20)
    timestamp = models.DateTimeField(auto_now_add=True)


class CredentialSubmission(models.Model):
    user = models.ForeignKey(
    CustomUser,
    on_delete=models.CASCADE,
    null=True,
    blank=True
)
    campaign = models.ForeignKey(Campaign, on_delete=models.CASCADE)
    submitted_username = models.CharField(max_length=100, blank=True)
    timestamp = models.DateTimeField(auto_now_add=True)