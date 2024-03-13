# Import necessary modules
from django.shortcuts import render

# Define a view for the home page
def home(request):
    return render(request, 'portfolio_app/home.html')

# Define a view for the about page.
def about(request):
    return render(request, 'portfolio_app/about.html')

# Define a view for the project page
def projects(request):
    return render(request, 'portfolio_app/projects.html')

# Define a view for the contact page 
def contact(request):
    return render(request, 'portfolio_app/contact.html')

# Define a view for the services page
def services(request):
    return render(request, 'portfolio_app/services.html')