const btn = document.getElementById('modo-toggle');
const html = document.documentElement;

function updateModeIcon() {
  if (html.getAttribute('data-theme') === 'dark') {
    btn.textContent = '☀️';
  } else {
    btn.textContent = '🌙';
  }
}

btn.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  html.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
  updateModeIcon();
});

// Inicializa el icono al cargar
updateModeIcon();
