// js/main.js
document.getElementById('year')?.textContent = new Date().getFullYear();
document.getElementById('year2')?.textContent = new Date().getFullYear();
document.getElementById('year3')?.textContent = new Date().getFullYear();
document.getElementById('year4')?.textContent = new Date().getFullYear();
document.getElementById('year5')?.textContent = new Date().getFullYear();

const menu = document.querySelector('.nav');
const toggle = document.getElementById('menuToggle');

toggle?.addEventListener('click', () => {
  menu?.classList.toggle('is-open');
});
