from django.db import models


class Campaign(models.Model):
    name = models.CharField(max_length=200)
    created_date = models.DateTimeField(auto_now_add=True)
    scheduled_date = models.DateTimeField()
    is_active = models.BooleanField(default=False)


class EmailTemplate(models.Model):
    campaign = models.ForeignKey(Campaign, on_delete=models.CASCADE)
    subject = models.CharField(max_length=200)
    body = models.TextField()
    sender_name = models.CharField(max_length=100)
    sender_email = models.EmailField()


class LandingPage(models.Model):
    campaign = models.ForeignKey(Campaign, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    url_path = models.SlugField()
    html_content = models.TextField()