# Generated by Django 4.1.2 on 2023-06-03 15:22

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('ProductApp', '0017_alter_cartuser_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cartuser',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
