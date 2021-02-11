const h1 = document.querySelector('h1');
const f  = document.querySelector('.form');
h1.addEventListener('click', () =>{
    if(f.style.opacity==="0"){    
        h1.style.marginLeft="21%";
        f.style.opacity="1";
        f.style.transform="translatex(0%)";
}
    else{
        h1.style.marginLeft="37%";
        f.style.opacity="0" ;
        f.style.transform="translatex(100%)";
     }
});






/*     
 */