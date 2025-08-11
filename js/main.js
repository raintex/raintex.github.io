// js/main.js
document.getElementById('year')?.textContent = new Date().getFullYear();
document.getElementById('year2')?.textContent = new Date().getFullYear();
document.getElementById('year3')?.textContent = new Date().getFullYear();
document.getElementById('year4')?.textContent = new Date().getFullYear();
document.getElementById('year5')?.textContent = new Date().getFullYear();

const menu = document.querySelector('.nav');
const toggle = document.getElementById('menuToggle');
toggle?.addEventListener('click', ()=> {
  if(menu.style.display === 'flex' || menu.style.display === 'block') menu.style.display = 'none';
  else menu.style.display = 'flex';
});
