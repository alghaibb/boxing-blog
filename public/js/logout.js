// Logout function
const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace('/login');
  } else {
    alert(response.statusText);
  }
};

const logoutLink = document.querySelector('#logout-link');
if (logoutLink) {
  logoutLink.addEventListener('click', (event) => {
    event.preventDefault();
    logout();
  });
}