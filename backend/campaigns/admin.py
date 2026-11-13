from django.contrib import admin
from .models import Campaign, EmailTemplate, LandingPage

admin.site.register(Campaign)
admin.site.register(EmailTemplate)
admin.site.register(LandingPage)