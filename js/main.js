const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('nav-open');
});

// This part for the year can be removed if it causes issues, but it should be fine.
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
