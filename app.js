const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const newServerBtn = document.getElementById('newServerBtn');

menuBtn?.addEventListener('click', () => sidebar?.classList.toggle('open'));

document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => sidebar?.classList.remove('open'));
});

newServerBtn?.addEventListener('click', () => {
  alert('Server creation UI is ready for the next phase. Backend/API will be connected later.');
});

document.querySelectorAll('.server-card .primary-btn').forEach(button => {
  button.addEventListener('click', () => {
    if (button.textContent.trim() === 'Start') {
      button.textContent = 'Starting…';
      setTimeout(() => {
        button.textContent = 'Start';
        alert('Preview mode: backend is not connected yet.');
      }, 700);
    } else {
      alert('Console preview: backend connection will be added later.');
    }
  });
});
