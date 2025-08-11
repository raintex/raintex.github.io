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

// Profile preview (client-side only)
const input = document.getElementById('profileInput');
const img = document.getElementById('profileImg');
if(input && img){
  input.addEventListener('change', (e)=>{
    const file = e.target.files[0];
    if(!file) return;
    const url = URL.createObjectURL(file);
    img.src = url;
    img.alt = "Preview image";
  });
}
