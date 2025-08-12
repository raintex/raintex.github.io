// js/main.js
document.addEventListener('DOMContentLoaded', function () {
  // Set the current year in the footer
  document.querySelectorAll('#year, #year2, #year3, #year4, #year5').forEach(span => {
    if (span) {
      span.textContent = new Date().getFullYear();
    }
  });

  // Handle mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.querySelector('.nav');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function () {
      navMenu.classList.toggle('nav-open');
    });
  }
});
