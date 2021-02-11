const h1 = document.querySelector('h1');
const f = document.querySelector('.form');
const pics = document.querySelectorAll('.pics');
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')


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
openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget)
      openModal(modal)
    })
  })
  
  overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
      closeModal(modal)
    })
  })
  
  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal')
      closeModal(modal)
    })
  })
  
  function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
  }
  
  function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
  }


/*
 */