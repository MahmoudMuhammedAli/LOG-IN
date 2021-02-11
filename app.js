const h1 = document.querySelector('h1');
const f = document.querySelector('.form');
const pics = document.querySelectorAll('.pics');
h1.addEventListener('click', () => {
    if (f.style.opacity === "0") {
        h1.style.marginLeft = "21%";
        f.style.opacity = "1";
        f.style.transform = "translatex(0%)";
    } else {
        h1.style.marginLeft = "37%";
        f.style.opacity = "0";
        f.style.transform = "translatex(100%)";
    }
});
pics.forEach(pic => {
    pic.addEventListener('click', () => {
        document.body.style = `    height: 60vh;
        background: url(${pic.src}) no-repeat center center fixed;
        -webkit-background-size:cover ;
        -moz-background-size:cover ;
        -o-background-size:cover ;
        background-size: cover;
        align-items: center;
        font-size: xx-large;
        font-family: 'Pacifico', cursive;
        font-family: 'Quattrocento Sans', sans-serif;`;
    })
});






/*     
 */