function addElement(){
   const newp=document.createElement('p');
   const newcontant=document.createTextNode('this is my all practice pg');
   newp.appendChild(newcontant);
   
   const currentp=document.getElementsByTagName('P');
   document.body.insertBefore(newp,currentp);