# Generated by Django 4.2.1 on 2023-06-14 15:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0010_remove_user_tc'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='phoneNumber',
            field=models.IntegerField(null=True),
        ),
    ]
