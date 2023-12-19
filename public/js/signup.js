const signupNameField = document.querySelector('#signup-name');
const signupEmailField = document.querySelector('#signup-email');
const signupPasswordField = document.querySelector('#signup-password');
const signupForm = document.querySelector('#signup-form');

// Function: signup
const signup = async (event) => {
  event.preventDefault();
  const name = signupNameField.value.trim();
  const email = signupEmailField.value.trim();
  const password = signupPasswordField.value.trim();
  if (name && email && password) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up');
    }
  }
}

// Event listener: loginForm
signupForm.addEventListener('submit', signup);