const menu=document.querySelector('#menu'), nav=document.querySelector('#nav');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');nav.classList.toggle('open',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
document.querySelector('#year').textContent=new Date().getFullYear();
document.querySelector('#quote').addEventListener('submit',e=>{e.preventDefault();const data=new FormData(e.currentTarget);const msg='Olá, equipe Stalplat! Gostaria de solicitar uma proposta.\n\nNome/empresa: '+data.get('nome')+'\nServiço: '+data.get('servico')+'\nLocal e detalhes: '+data.get('detalhes');window.open('https://wa.me/5511993416294?text='+encodeURIComponent(msg),'_blank','noopener,noreferrer')});
