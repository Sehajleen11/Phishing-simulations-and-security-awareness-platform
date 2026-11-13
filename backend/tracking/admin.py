from django.contrib import admin
from .models import EmailEvent, CredentialSubmission

admin.site.register(EmailEvent)
admin.site.register(CredentialSubmission)