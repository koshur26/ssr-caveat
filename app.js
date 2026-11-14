if(screen.width<=900)document.documentElement.classList.add('m');
var d={court:'BEFORE THE HON’BLE COURT OF PRINCIPAL DISTRICT JUDGE, AT SRINAGAR',no:'',year:'2026',date:'',postal:'',gender:'M',
 cav:[{name:'Abdul Raheem Rather',rel:'S/o',father:'Ghulam Mohammad Rather',addr:'Residency Road Srinagar, J&K.'}],
 non:[{name:'Raheem Abdul Dar',rel:'S/o',father:'Abdul Rahim Dar',addr:'Lal Chowk, Srinagar, J&K.'}]};
var $=function(s){return document.querySelector(s)},q=function(v){return String(v).replace(/"/g,'&quot;')};
function card(g,i,p){return '<div class="card"><div class="ch"><b>'+(g=='cav'?'Caveator':'Non-Caveator')+' '+(i+1)+'</b>'+(d[g].length>1?'<button class="x" data-act="del" data-g="'+g+'" data-i="'+i+'">Remove</button>':'')+'</div>'+
 '<label>Name<input data-g="'+g+'" data-i="'+i+'" data-f="name" value="'+q(p.name)+'"></label>'+
 '<div class="row"><label style="flex:0 0 90px">Relation<select data-g="'+g+'" data-i="'+i+'" data-f="rel">'+['S/o','D/o','W/o'].map(function(r){return '<option'+(r==p.rel?' selected':'')+'>'+r+'</option>'}).join('')+'</select></label>'+
 '<label>Father’s / husband’s name<input data-g="'+g+'" data-i="'+i+'" data-f="father" value="'+q(p.father)+'"></label></div>'+
 '<label>Address (after “R/o”)<input data-g="'+g+'" data-i="'+i+'" data-f="addr" value="'+q(p.addr)+'"></label></div>'}
function form(){['cav','non'].forEach(function(g){$('#'+g).innerHTML=d[g].map(function(p,i){return card(g,i,p)}).join('')});
 var m=d.cav.length>1;$('#gender').disabled=m;$('#gnote').textContent=m?'Several caveators: text uses “their”.':'Used only for his / her.';$('#gender').value=d.gender}
function fit(){var z=Math.min(1,($('#wrap').clientWidth-2)/816);$('#doc').style.zoom=z}
function preview(){$('#doc').innerHTML=toHTML(build(d));fit()}
window.addEventListener('resize',fit);
function fname(e){return 'Caveat_'+(d.cav[0].name||'Petition').trim().replace(/\W+/g,'_')+'.'+e}
document.addEventListener('input',function(e){var t=e.target,f=t.dataset.f;if(!f)return;
 if(t.dataset.g)d[t.dataset.g][t.dataset.i][f]=t.value;else d[f]=t.value;
 if(f=='gender'){var r=d.cav[0].rel;if(d.gender=='F'&&r=='S/o')d.cav[0].rel='D/o';if(d.gender=='M'&&r=='D/o')d.cav[0].rel='S/o';form()}
 preview()});
document.addEventListener('click',function(e){var a=e.target.dataset.act;if(!a)return;var g=e.target.dataset.g;
 if(a=='add'){d[g].push({name:'',rel:'S/o',father:'',addr:''});form()}
 if(a=='del'){d[g].splice(e.target.dataset.i,1);form()}
 if(a=='clear'){d.cav=[{name:'',rel:'S/o',father:'',addr:''}];d.non=[{name:'',rel:'S/o',father:'',addr:''}];form()}
 if(a=='docx'){if(!d.cav[0].name.trim()||!d.non[0].name.trim()){if(!confirm('A party name is empty. Continue?'))return}
  docx.Packer.toBlob(toDocx(build(d))).then(function(b){var l=document.createElement('a');l.href=URL.createObjectURL(b);l.download=fname('docx');l.click()})}
 if(a=='pdf'){var ot=document.title;document.title=fname('pdf').replace(/\.pdf$/,'');window.onafterprint=function(){document.title=ot};window.print()}
 preview()});
form();preview();

$('#court').value=d.court;
document.querySelectorAll('[data-f=year]').forEach(function(i){i.value=d.year});
