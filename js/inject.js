
window.addEventListener('DOMContentLoaded', () => {
  const root = location.pathname.includes('/html/') ? '../' : './';

  fetch(root + 'includes/header.html')
    .then(res => res.text())
    .then(data => {
      const header = document.getElementById('header');
      if (header) header.innerHTML = data;
    });

  fetch(root + 'includes/footer.html')
    .then(res => res.text())
    .then(data => {
      const footer = document.getElementById('footer');
      if (footer) footer.innerHTML = data;
    });
});
