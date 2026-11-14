/* Login gate. To change the password: open the page, press F12 → Console, run  hashPassword('your new password')
   and paste the number it prints into PASS_HASH below. (Default password: ssra2026) */
var PASS_HASH='8454631721316013';
function hashPassword(str){var h1=0xdeadbeef,h2=0x41c6ce57;for(var i=0,c;i<str.length;i++){c=str.charCodeAt(i);h1=Math.imul(h1^c,2654435761);h2=Math.imul(h2^c,1597334677)}
 h1=Math.imul(h1^(h1>>>16),2246822507)^Math.imul(h2^(h2>>>13),3266489909);h2=Math.imul(h2^(h2>>>16),2246822507)^Math.imul(h1^(h1>>>13),3266489909);return String(4294967296*(2097151&h2)+(h1>>>0))}
(function(){var ov=document.getElementById('loginOverlay'),inp=document.getElementById('loginPw'),err=document.getElementById('loginErr');
 try{if(sessionStorage.getItem('ssra_ok')==='1'){ov.classList.add('hidden');return}}catch(e){}
 function go(){if(hashPassword(inp.value)===PASS_HASH){try{sessionStorage.setItem('ssra_ok','1')}catch(e){}ov.classList.add('hidden')}
  else{err.textContent='Incorrect password.';inp.classList.remove('error');void inp.offsetWidth;inp.classList.add('error');inp.value='';inp.focus()}}
 document.getElementById('loginBtn').onclick=go;inp.onkeydown=function(e){if(e.key==='Enter')go()};setTimeout(function(){inp.focus()},50)})();
