const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const login = $('#login');
const app = $('#app');
const error = $('#loginError');
const form = $('#loginForm');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  error.hidden = true;

  const formData = new FormData(form);
  const username = String(formData.get('username') || '').trim();
  const password = String(formData.get('password') || '');

  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) throw new Error('AUTH_FAILED');

    login.hidden = true;
    app.hidden = false;
    show('dashboard');
  } catch {
    error.textContent = 'Authentication service is not connected yet.';
    error.hidden = false;
  }
});

function show(id) {
  $$('.view').forEach((view) => { view.hidden = true; });
  const view = $(`#${id}`);
  if (view) view.hidden = false;

  $$('.sidebar nav button').forEach((button) => {
    button.classList.toggle('active', button.dataset.view === id);
  });

  const titles = {
    dashboard: 'Dashboard',
    servers: 'Servers',
    activity: 'Activity',
    settings: 'Settings',
  };

  $('#pageTitle').textContent = titles[id] || 'Server Detail';
  $('#sidebar').classList.remove('open');
}

$$('[data-view]').forEach((button) => {
  button.addEventListener('click', () => show(button.dataset.view));
});

$('#menu').addEventListener('click', () => {
  $('#sidebar').classList.toggle('open');
});

$$('[data-tab]').forEach((button) => {
  button.addEventListener('click', () => {
    const tab = button.dataset.tab;
    $$('.tabs button').forEach((item) => item.classList.toggle('active', item === button));
    $$('[data-panel]').forEach((panel) => { panel.hidden = panel.dataset.panel !== tab; });
  });
});
