document.addEventListener("DOMContentLoaded", function(){
  const langBtn = document.querySelector('.lang-btn');
  const langMenu = document.querySelector('.lang-menu');
  if(langBtn){
    langBtn.addEventListener('click', ()=>{ langMenu.style.display = (langMenu.style.display==='block')? 'none':'block'; });
    document.addEventListener('click', (e)=>{ if(!langBtn.contains(e.target) && !langMenu.contains(e.target)) langMenu.style.display='none'; });
  }
  document.querySelectorAll('.lang-action').forEach(a=> a.addEventListener('click', (e)=>{
    const lang = e.currentTarget.getAttribute('data-lang');
    // Navigate keeping path: if current path has /fa/ /en/ /de/ replace, else prepend
    let p = window.location.pathname;
    if(p.match(/^\/(fa|en|de)(\/|$)/)){
      p = p.replace(/^\/(fa|en|de)/, '/'+lang);
    } else {
      p = '/'+lang + (p === '/' ? '/' : p);
    }
    window.location.href = p;
  }));
});
