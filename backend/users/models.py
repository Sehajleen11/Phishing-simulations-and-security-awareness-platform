from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    department = models.CharField(max_length=100)
    is_target = models.BooleanField(default=True)
    security_score = models.IntegerField(default=100)