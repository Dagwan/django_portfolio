// Form submission handling
var form = document.querySelector('.php-email-form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (validateForm()) {
    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', form.getAttribute('action'));
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        var sentMessage = form.querySelector('.sent-message');
        if (sentMessage) {
          sentMessage.style.display = 'block';
        }
        var errorMessage = form.querySelector('.error-message');
        if (errorMessage) {
          errorMessage.style.display = 'none';
        }
      } else {
        var errorMessage = form.querySelector('.error-message');
        if (errorMessage) {
          errorMessage.style.display = 'block';
          errorMessage.innerHTML = 'Oops! An error occurred. Please try again later.';
        }
      }
    };
    xhr.send(formData);
  }
});

// Form field validation
function validateForm() {
  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var subjectInput = document.getElementById('subject');
  var messageInput = document.getElementById('message');
  
  var isValid = true;

  if (nameInput.value.trim() === '') {
    isValid = false;
    setErrorFor(nameInput, 'Name cannot be blank');
  } else {
    setSuccessFor(nameInput);
  }

  if (emailInput.value.trim() === '' || !isEmail(emailInput.value.trim())) {
    isValid = false;
    setErrorFor(emailInput, 'Please enter a valid email address');
  } else {
    setSuccessFor(emailInput);
  }

  if (subjectInput.value.trim() === '') {
    isValid = false;
    setErrorFor(subjectInput, 'Subject cannot be blank');
  } else {
    setSuccessFor(subjectInput);
  }

  if (messageInput.value.trim() === '') {
    isValid = false;
    setErrorFor(messageInput, 'Message cannot be blank');
  } else {
    setSuccessFor(messageInput);
  }

  return isValid;
}

// Function to display error message for input field
function setErrorFor(input, message) {
  var formControl = input.parentElement;
  var errorMessage = formControl.querySelector('.error-message');
  errorMessage.innerText = message;
  formControl.classList.add('error');
}

// Function to remove error message for input field
function setSuccessFor(input) {
  var formControl = input.parentElement;
  formControl.classList.remove('error');
}

// Function to validate email format
function isEmail(email) {
  // Regular expression for email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
