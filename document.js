var F='Bookman Old Style';
function R(t,o){o=o||{};return t.split('*').map(function(s,k){return Object.assign({t:s},o,k%2?{i:true}:{})}).filter(function(r){return r.t})}
function P(runs,o){o=o||{};return Object.assign({k:'p',line:276,after:160,runs:typeof runs==='string'?R(runs,o.r):runs},o)}
function build(d){
 var n=d.cav.length>1,m=d.non.length>1,fem=d.gender==='F';
 var C=n?'Caveators':'Caveator',N=m?'Non-Caveators':'Non-Caveator';
 var his=n?'their':fem?'her':'his',yr=d.year||'2026';
 var bl=function(v,l){return v&&v.trim()?v.trim():'_'.repeat(l)};
 var num=bl(d.no,6),court=(d.court||'').replace(/\s+/g,' ');
 var head=function(pb){return P(court,{r:{b:true},jc:'center',pb:pb})};
 var party=function(list){var out=[];list.forEach(function(p,i){var k=list.length>1,last=i===list.length-1;
  [p.name,(p.rel+' '+p.father).trim(),'R/o '+p.addr].forEach(function(t,j){
   var runs=(k&&j===0?[{nt:(i+1)+'.'}]:[]).concat(R(t));
   out.push(P(runs,{after:j===2&&!last?120:0,left:k?2520:2160,hang:k&&j===0?360:0}))})});return out};
 var cause=function(){return [
  P('Caveat Petition No. '+num+'/'+yr,{r:{sz:24},jc:'right',line:240,after:0}),
  P('Under Section 148A CPC',{r:{sz:24},jc:'right',line:240}),
  P('In the Case of:',{line:360,jc:'justify'})].concat(party(d.cav),[
  P('…..  '+C,{r:{b:true},jc:'right',line:360}),
  P('V E R S U S',{r:{b:true},jc:'center',line:360})],party(d.non),[
  P('…..  '+N,{r:{b:true},jc:'right',left:6480,line:360})])};
 var date=bl(d.date,16),sig=function(){return [P('',{jc:'right',after:0}),
  P(C+' through Counsel',{jc:'right',after:0}),P('Syed Sibtain Razvi & Associates',{jc:'right',after:0})]};
 var B=[];
 // Page 1: cover + index
 B.push(head(false));B.push.apply(B,cause());
 B.push(P('INDEX',{r:{b:true,u:true},jc:'center',before:240}));
 B.push({k:'t',rows:[['S. No.','PARTICULARS','PAGE NO.'],['1.','Caveat Application',''],['2.','Annexure - I',''],['3.','Affidavit',''],['4.','Power of Attorney',''],['5.','','']]});
 B.push(P(''),P('Dated: '+(d.date||'')));B.push.apply(B,sig());
 // Petition
 B.push(head(true));B.push.apply(B,cause());
 B.push(P('In the matter of:',{line:360,jc:'justify'}),P('Caveat petition under section 148-A of C.P.C.',{r:{b:true},jc:'center'}),
  P('May it Please Your Honour,'),P('The '+C+' most humbly '+(n?'submit':'submits')+' as under:'));
 var np=function(t){return P(t,{num:'pet',left:720,hang:360,line:360,jc:'justify',after:500})};
 B.push(np('That the '+C+' '+(n?'are the citizens':'is the citizen')+' of Union of India and hence '+(n?'have':'has')+' a right to invoke the jurisdiction of this Hon’ble court for the protection of '+his+' legal rights which are threatened to be invaded by the '+N.toLowerCase()+'.'));
 B.push(np('That the '+C+' '+(n?'have':'has')+' a reasonable apprehension that the '+N+' may file a suit, appeal, revision, or any other proceedings against the '+C+' on the basis of distorted facts, misrepresentation, or a concocted story, and may succeed in obtaining an *ex-parte* relief or order at '+his+' back, which would seriously prejudice the rights and interests of the '+C+'.'));
 B.push(np('That in the event any suit, appeal, revision, or other proceedings are instituted by the '+N+' against the '+C+', the '+C+' or '+his+' counsel '+(n?'deserve':'deserves')+' to be afforded a reasonable opportunity of being heard before any order is passed therein; otherwise, the '+C+' shall suffer irreparable loss and injury which cannot be compensated later in any manner whatsoever, and any order obtained on false representations by the '+N+' would amount to a gross abuse of the process of the Court.'));
 var p4=P(R('That in compliance with Section 148-A(2) of the Code of Civil Procedure, 1908, the '+C+' '+(n?'have':'has')+' already sent a copy of this Caveat Petition to the '+N+' through registered post.').concat([{br:1}],R('A copy of the postal receipt dated '+bl(d.postal,20)+' is annexed herewith as Annexure-I for the kind perusal of this Hon\'ble Court.',{b:true})),{num:'pet',left:720,hang:360,line:360,jc:'justify',after:500});
 B.push(p4);
 B.push(P('In the premises, it is therefore prayed that this Hon\'ble Court may graciously be pleased to take this Caveat on record, and in case the '+N+' '+(m?'file':'files')+' any suit, appeal, revision, or other proceedings against the '+C+', the '+C+' or '+his+' counsel be heard before passing any *ex-parte* order therein, in the interest of law and justice; otherwise, the '+C+' shall suffer irreparable loss and injury to '+his+' rights and interests which cannot be compensated later, and it would amount to a gross abuse of the process of law.',{line:360,jc:'justify'}));
 B.push(P(''));B.push.apply(B,sig());B.push(P('',{after:0}),P('Dated: '+date,{after:0}));
 // Affidavit
 var ofs=function(list){return list[0].name+(list.length==2?' & Anr.':list.length>2?' & Ors.':'')};
 var c=d.cav[0];
 B.push(head(true),P('',{line:360}),P('In the Case of:',{line:360,jc:'justify'}),
  P(ofs(d.cav),{left:2160,after:0}),P('',{left:2160,after:0}),
  P('V E R S U S',{r:{b:true},left:2160,line:360}),P(ofs(d.non),{left:2160}),
  P('In the matter of:',{line:360,jc:'justify',after:0}),
  P('AFFIDAVIT IN SUPPORT OF CAVEAT APPLICATION',{r:{b:true,sz:24},left:2160,line:360}),
  P([{t:'I, ',i:true},{t:c.name+' ',b:true},{t:(c.rel+' '+c.father).trim()+' R/o '+c.addr.replace(/\.+$/,'')+' do hereby solemnly affirm and declare on oath as under:-'}],{line:360,jc:'justify'}));
 ['That the factual averments made in the caveat application are true and correct to the best of my knowledge and belief.',
  'That the legal submissions made in the application and the grounds urged therein are believed to be true on the basis of legal advice tendered.',
  'That nothing contrary to record has been stated or concealed.'].forEach(function(t){B.push(P(t,{num:'aff',left:720,hang:360,line:360,jc:'justify',after:200}))});
 B.push(P('',{line:360}),P('Deponent',{r:{b:true},jc:'right',line:360}),P('Verification:',{r:{b:true},line:360}),
  P('Verified today on '+(d.date?d.date:bl('',14)+', '+yr)+', that the contents made in this affidavit are true and correct to the best of my knowledge and nothing has been concealed therein.',{line:360,jc:'justify'}),
  P('',{jc:'right',after:0,line:360}),P('',{jc:'right',after:0,line:360}),P('Deponent',{r:{b:true},jc:'right',after:0,line:360}));
 return B}
function toDocx(B){var D=docx,A=D.AlignmentType,run=function(r){
  if(r.br)return new D.TextRun({break:1});
  var o={font:F,size:r.sz||28,bold:r.b,italics:r.i,underline:r.u?{}:undefined};
  if(r.tab){o.children=[new D.Tab()]}else o.text=r.t;return new D.TextRun(o)};
 var jc={right:A.RIGHT,center:A.CENTER,justify:A.JUSTIFIED},bd={style:D.BorderStyle.SINGLE,size:4,color:'000000'};
 var para=function(b,w){return new D.Paragraph({children:[].concat.apply([],b.runs.map(function(r){return r.nt?[run({t:r.nt}),run({tab:1})]:[run(r)]})),alignment:jc[b.jc]||A.LEFT,pageBreakBefore:!!b.pb,
  spacing:{line:b.line,lineRule:D.LineRuleType.AUTO,after:b.after,before:b.before||0},
  indent:(b.left||b.hang)?{left:b.left||0,hanging:b.hang||undefined}:undefined,
  numbering:b.num?{reference:b.num,level:0}:undefined})};
 var W=[1276,5245,2243];
 var kids=B.map(function(b){if(b.k!=='t')return para(b);
  return new D.Table({width:{size:8764,type:D.WidthType.DXA},columnWidths:W,rows:b.rows.map(function(r,ri){
   return new D.TableRow({height:{value:760,rule:D.HeightRule.ATLEAST},children:r.map(function(t,ci){
    return new D.TableCell({width:{size:W[ci],type:D.WidthType.DXA},verticalAlign:D.VerticalAlign.CENTER,
     borders:{top:bd,bottom:bd,left:bd,right:bd},children:[para({runs:t?[{t:t,b:ri==0,u:ri==0}]:[],jc:ri==0?'center':'',line:278,after:160})]})})})})})});
 var lv=function(b){return[{level:0,format:D.LevelFormat.DECIMAL,text:'%1.',alignment:A.LEFT,style:{paragraph:{indent:{left:720,hanging:360}},run:{font:F,size:28,bold:b}}}]};
 return new D.Document({numbering:{config:[{reference:'pet',levels:lv(true)},{reference:'aff',levels:lv(false)}]},
  styles:{default:{document:{run:{font:F,size:24}}}},
  sections:[{properties:{page:{size:{width:12240,height:20160},margin:{top:1418,right:1440,bottom:1276,left:1440,header:708,footer:708}}},children:kids}]})}
function toHTML(B){var cnt={},e=function(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;')};
 var runH=function(r){if(r.br)return '<br>';if(r.nt)return '<span class="tab">'+e(r.nt)+'</span>';if(r.tab)return '<span class="tab"></span>';
  var s=(r.b?'font-weight:bold;':'')+(r.i?'font-style:italic;':'')+(r.u?'text-decoration:underline;':'')+(r.sz?'font-size:'+r.sz/2+'pt;':'');
  return '<span style="'+s+'">'+e(r.t)+'</span>'};
 return B.map(function(b){
  if(b.k==='t')return '<table>'+b.rows.map(function(r,ri){return '<tr>'+r.map(function(t,ci){return '<'+(0?'th':'td')+' style="width:'+[63.8,262.3,112.2][ci]+'pt;'+(ri==0?'text-align:center;font-weight:bold;text-decoration:underline':'')+'">'+e(t)+'</td>'}).join('')+'</tr>'}).join('')+'</table>';
  var pre='';if(b.num){cnt[b.num]=(cnt[b.num]||0)+1;pre='<span class="tab" style="'+(b.num=='pet'?'font-weight:bold':'')+'">'+cnt[b.num]+'.</span>'}
  var st='line-height:'+(b.line/240*1.2).toFixed(3)+';margin:'+((b.before||0)/20)+'pt 0 '+b.after/20+'pt '+(b.left||0)/20+'pt;text-indent:-'+(b.hang||0)/20+'pt;'+(b.jc?'text-align:'+b.jc+';':'');
  var sz=(b.runs[0]&&b.runs[0].sz)||28;st+='font-size:'+sz/2+'pt;';
  return '<div class="'+(b.pb?'pb':'')+'" style="'+st+'">'+pre+(b.runs.length?b.runs.map(runH).join(''):'&nbsp;')+'</div>'}).join('')}
if(typeof module!=='undefined')module.exports={build:build,toDocx:toDocx,toHTML:toHTML};
