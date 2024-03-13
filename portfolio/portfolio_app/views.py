# Import necessary modules
from django.shortcuts import render, redirect
# Import the ContacForm class from form.py
from .forms import ContactForm

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
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # Save the form data to the database
            form.save()
            # Redirect to a success page after successful form submission
            return render(request, 'portfolio_app/thanks.html')
    else:
        # If the request method is GET, create a new instance of the ContactForm
        form = ContactForm()
    
     # Render the contact.html template and pass the form object to it
    return render(request, 'portfolio_app/contact.html', {'form': form})


# Define a view for the services page
def services(request):
    return render(request, 'portfolio_app/services.html')