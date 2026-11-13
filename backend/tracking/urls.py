from django.urls import path
from .views import CredentialSubmissionView

urlpatterns = [
    path(
        "submit/",
        CredentialSubmissionView.as_view(),
        name="credential-submit"
    ),
]