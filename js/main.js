document.addEventListener('DOMContentLoaded', function () {
  // Sets the current year in the footer spans
  const yearSpans = document.querySelectorAll('#year, #year2, #year3, #year4, #year5');
  yearSpans.forEach(span => {
    if (span) {
      span.textContent = new Date().getFullYear();
    }
  });

  // Handles the mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.querySelector('nav.nav'); // More specific selector

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function () {
      navMenu.classList.toggle('nav-open');
    });
  }
});
