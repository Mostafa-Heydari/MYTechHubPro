document.addEventListener("DOMContentLoaded", function(){
  const langBtn = document.querySelector('.lang-btn');
  const langMenu = document.querySelector('.lang-menu');
  if(langBtn){
    langBtn.addEventListener('click', ()=>{ langMenu.style.display = (langMenu.style.display==='block')? 'none':'block'; });
    document.addEventListener('click', (e)=>{ if(!langBtn.contains(e.target) && !langMenu.contains(e.target)) langMenu.style.display='none'; });
  }
  // simple smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{ e.preventDefault(); document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'}); });
  });
});
