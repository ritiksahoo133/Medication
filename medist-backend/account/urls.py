from django.urls import path
from account import views

urlpatterns = [
    path("register/", views.UserRegistration.as_view(), name="register"),
    path("login/", views.UserLogin.as_view(), name="login"),
    path("profile/", views.UserProfile.as_view(), name="profile"),
    path("profile/<int:id>", views.UserProfile.as_view(), name="profile"),
    path("changepassword/", views.UserChangePassword.as_view(), name="changepassword"),
    path(
        "updateprofile/<int:id>/",
        views.UserProfileView.as_view(),
        name="profile-update",
    ),
    path(
        "resetpasswordemail/",
        views.PasswordResetEmail.as_view(),
        name="resetpasswordemail",
    ),
    path("resetpassword/", views.UserPasswordReset.as_view(), name="resetpassword"),
    # path("logout/", views.UserLogout.as_view(), name="logout"),
]
