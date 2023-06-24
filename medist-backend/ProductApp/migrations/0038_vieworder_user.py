# Generated by Django 4.1.2 on 2023-06-24 01:45

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('ProductApp', '0037_remove_vieworder_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='vieworder',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
