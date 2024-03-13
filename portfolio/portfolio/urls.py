from django.contrib import admin
from django.urls import path
from portfolio_app import views

# Define URL patterns for the 'portfolio_app' app
urlpatterns = [
    # Map the path to each page
    path('admin/', admin.site.urls, name='admin'),
    path('', views.home, name='home'),  
    path('about/', views.about, name='about'),
    path('services/', views.services, name='services'),
    path('projects/', views.projects, name='projects'),
    path('contact/', views.contact, name='contact'),
]
