const toggleBtn = document.getElementById('modo-toggle');
const root = document.documentElement;

toggleBtn.addEventListener('click', () => {
  const isDark = root.getAttribute('data-theme') === 'dark';
  root.setAttribute('data-theme', isDark ? 'light' : 'dark');
});
