"""foodie_django URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
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
from django.urls import path
from django.conf.urls import url, include
from foodie import views
<<<<<<< HEAD
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('foodie.urls')),
]
=======

urlpatterns=[
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('about', views.about, name='about')
    # path('special', views.special, name='special'),
    # path('foodie/', include('foodie.urls')),
    # path('logout', views.user_logout, name='logout'),
]
>>>>>>> 349ef14eb83b4b19e7acdba4972b89f9692c3d01
