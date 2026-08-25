const form = document.getElementById('loginForm');
const password = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const notice = document.getElementById('notice');

// Frontend-only for now. Real authentication must be implemented server-side.
togglePassword?.addEventListener('click', () => {
  const visible = password.type === 'text';
  password.type = visible ? 'password' : 'text';
  togglePassword.textContent = visible ? 'Show' : 'Hide';
});

form?.addEventListener('submit', event => {
  event.preventDefault();
  notice.textContent = 'Authentication backend is not connected yet.';
});
