# Generated by Django 4.2.1 on 2023-06-14 15:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ProductApp', '0020_alter_cartuser_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cartuser',
            name='user',
        ),
        migrations.DeleteModel(
            name='AddCart',
        ),
        migrations.DeleteModel(
            name='cartUser',
        ),
    ]