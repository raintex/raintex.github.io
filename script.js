// small UI niceties
document.getElementById('year').textContent = new Date().getFullYear();
const menu = document.getElementById('nav');
const toggle = document.getElementById('menuToggle');
toggle && toggle.addEventListener('click', ()=> {
  if(menu.style.display === 'flex') menu.style.display = 'none';
  else menu.style.display = 'flex';
});

// CV button scroll/download
document.getElementById('cvBtn')?.addEventListener('click', ()=> {
  window.location.href = 'CV__current__with_months-2.pdf';
});
