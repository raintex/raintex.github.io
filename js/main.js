document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile Menu Logic ---
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.querySelector('nav.nav');

  if (menuToggle && navMenu) {
    // Toggle menu on button click
    menuToggle.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevents the click from bubbling up
      navMenu.classList.toggle('nav-open');
    });

    // Close menu when clicking outside of it
    document.addEventListener('click', (event) => {
      if (navMenu.classList.contains('nav-open') && !navMenu.contains(event.target)) {
        navMenu.classList.remove('nav-open');
      }
    });
    
    // Close menu on 'Escape' key press
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navMenu.classList.contains('nav-open')) {
        navMenu.classList.remove('nav-open');
      }
    });
  }

  // --- Footer Year Logic ---
  const yearSpans = document.querySelectorAll('#year, #year2, #year3, #year4, #year5');
  yearSpans.forEach(span => {
    if (span) {
      span.textContent = new Date().getFullYear();
    }
  });
});
