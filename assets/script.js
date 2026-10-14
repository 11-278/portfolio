
document.addEventListener('DOMContentLoaded', () => {
  const current = location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === current) {
      a.classList.add('active');
    }
  });

  const y = document.querySelector('[data-year]');
  if (y) {
    y.textContent = new Date().getFullYear();
  }

  const form = document.querySelector('#contact-form');

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();

      const target = '23uon0329@gmail.com';

      const n = document.querySelector('#name').value.trim();
      const em = document.querySelector('#email').value.trim();
      const m = document.querySelector('#message').value.trim();

      location.href = `mailto:${target}?subject=${encodeURIComponent(
        'Portfolio inquiry from ' + n
      )}&body=${encodeURIComponent(
        'From: ' + n + ' (' + em + ')\n\n' + m
      )}`;
    });
  }
});
