const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);const login=$('#login'),app=$('#app'),error=$('#loginError');
$('#loginForm').addEventListener('submit',e=>{e.preventDefault();error.hidden=true;login.hidden=true;app.hidden=false;show('dashboard')});
function show(id){$$('.view').forEach(v=>v.hidden=true);const view=$('#'+id);if(view)view.hidden=false;$$('.sidebar nav button').forEach(b=>b.classList.toggle('active',b.dataset.view===id));const titles={dashboard:'Dashboard',servers:'Servers',activity:'Activity',settings:'Settings'};$('#pageTitle').textContent=titles[id]||'Server Detail';$('#sidebar').classList.remove('open')}
$$('[data-view]').forEach(b=>b.addEventListener('click',()=>show(b.dataset.view)));
$('#menu').addEventListener('click',()=>$('#sidebar').classList.toggle('open'));
$$('[data-tab]').forEach(b=>b.addEventListener('click',()=>{const tab=b.dataset.tab;$$('.tabs button').forEach(x=>x.classList.toggle('active',x===b));$$('[data-panel]').forEach(p=>p.hidden=p.dataset.panel!==tab)}));
