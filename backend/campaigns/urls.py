from django.urls import path
from .views import EmailTemplateListCreateView, EmailTemplateDetailView
from .views import CampaignCreateView

urlpatterns = [
    path('templates/', EmailTemplateListCreateView.as_view(), name='template-list-create'),
    path('templates/<int:pk>/', EmailTemplateDetailView.as_view(), name='template-detail'),
    path("create/", CampaignCreateView.as_view(), name="campaign-create"),
    path('campaign' \
    's/', CampaignCreateView.as_view(), name='campaign-create'),
]