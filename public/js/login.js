const loginEmailField = document.querySelector('#login-email');
const loginPasswordField = document.querySelector('#login-password');
const loginForm = document.querySelector('#login-form');

// Function: login
const login = async (event) => {
  event.preventDefault();
  const email = loginEmailField.value.trim();
  const password = loginPasswordField.value.trim();
  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
}

// Event listener: loginForm
loginForm.addEventListener('submit', login);