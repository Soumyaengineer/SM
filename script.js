
const current=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.nav a').forEach(a=>{if(a.getAttribute('href')===current)a.classList.add('active')});
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open?'true':'false')})}
const revealObs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>revealObs.observe(el));
document.querySelectorAll('.tab').forEach(tab=>tab.addEventListener('click',()=>{document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));tab.classList.add('active');document.getElementById(tab.dataset.tab)?.classList.add('active')}));
document.querySelectorAll('.orbit-node').forEach(btn=>{
  const show=()=>{document.querySelectorAll('.orbit-node').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const box=document.getElementById('skillTooltip');const link=document.getElementById('skillLink');if(box){box.innerHTML='<strong>'+btn.textContent+'</strong><p>'+btn.dataset.info+'</p><a href="'+btn.dataset.link+'" id="skillLink">View related evidence →</a>';box.classList.remove('pop');void box.offsetWidth;box.classList.add('pop')}};
  btn.addEventListener('click',show);btn.addEventListener('mouseenter',show)
});
document.querySelectorAll('.accordion-btn').forEach(btn=>btn.addEventListener('click',()=>{btn.nextElementSibling?.classList.toggle('open')}));
document.querySelectorAll('.magnetic').forEach(b=>{b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect(),x=e.clientX-r.left-r.width/2,y=e.clientY-r.top-r.height/2;b.style.transform=`translate(${x*.06}px,${y*.08}px)`});b.addEventListener('mouseleave',()=>b.style.transform='')});
