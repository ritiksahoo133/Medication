"""medistPrj URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from . import settings
from rest_framework.routers import DefaultRouter
from django.urls import path, include
from ProductApp import views as product
from django.contrib.staticfiles.urls import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns


router = DefaultRouter()
router.register("products", product.ProductDetailsView, basename="products")
router.register("paymentcart", product.PaymentCartViewSet, basename="paymentcart")
router.register("cart", product.AddtoCartApiView, basename="AddtoCart")
router.register("vieworder", product.ViewOrderFunction, basename="vieworder")
urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("account.urls")),
    path("", include(router.urls)),
    path("createOrder/", product.createOrder),
    path("verifySignature/", product.verifySignature),
]

urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
