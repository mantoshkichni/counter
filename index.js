let count= 0;
let plus1=document.getElementById('plus1').addEventListener('click',()=>{
count++;
const sect=document.getElementById('h1').innerHTML=count;
    
})
let minus1=document.getElementById('minus1').addEventListener('click',()=>{
    count--;
    const sect=document.getElementById('h1').innerHTML=count;
    // const para=document.createElement('p');
    // para.textContent=count;
    // sect.appendChild(para)

})
 let reset=document.getElementById('reset').addEventListener('click',()=>{
  count=0;
  const sect=document.getElementById('h1').innerHTML=count;
    
})