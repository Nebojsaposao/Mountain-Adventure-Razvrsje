// SETOVANJE GODINE U FOOTER-U
const dateElement = document.getElementById("date");
dateElement.innerHTML = new Date().getFullYear();




// setup za navigaciju na mobilnim uredjajima
const toogleBtn = document.querySelector('.toggle_btn');
const toogleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toogleBtn.onclick = function () {
    dropDownMenu.classList.toggle("open");
    const isOpen = dropDownMenu.classList.contains("open");

    toogleBtnIcon.classList = isOpen
        ? "fa-solid fa-xmark"
        : "fa-solid fa-bars";

}
const toggleBtn = document.querySelector('.toggle_btn');

// Dodajemo event listener za klik na dugme
toggleBtn.addEventListener('click', function() {
  // Rotiramo dugme za 360 stepeni
  toggleBtn.classList.toggle('rotate');
});

// ZATVARANJE DROPDOWNMENIA KADA SE KLIKNE NA LINK
// Selektujemo sve linkove unutar dropdown menija
const dropdownLinks = document.querySelectorAll('.dropdown_menu a');

// Dodajemo event listener na svaki link
dropdownLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Zatvaramo dropdown meni
    const dropdownMenu = document.querySelector('.dropdown_menu');
    dropdownMenu.classList.remove('open');
    
    // Vraćamo ikonicu dugmeta za otvaranje na početni položaj
    const toggleBtnIcon = document.querySelector('.toggle_btn i');
    toggleBtnIcon.classList = "fa-solid fa-bars";
    // Uklanjamo aktivnu klasu sa svih linkova u dropdown meniju
    dropdownLinks.forEach(dropdownLink => {
      dropdownLink.classList.remove('.dropdown_menu a.active');
    });
    
    // Označavamo kliknuti link kao aktivan
    link.classList.add('.dropdown_menu a.active');
  });
});




// LAGANO SKROLOVANJE NA DUGME VRATI NA VRH
function smoothScrollToTop() {
    const targetPosition = 0;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 4000; // ovdje podesavamo duzinu skrolovanja
  
    let start = null;
    window.requestAnimationFrame(step);
  
    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      window.scrollTo(0, easeInOut(progress, startPosition, distance, duration));
      if (progress < duration) window.requestAnimationFrame(step);
    }
  
    // EaseInOut funkcija
    function easeInOut(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }
  }
  








// FUNKCIJA ZA DUGME ZA POVRATAK U ISTORIJI PRETRAGE(DUGME GO BACK)
function goBack() {
  window.history.back();
}






// JavaScript za otvaranje/zatvaranje modala na stranici products za link telefon 
    // Dohvati modal element
    var modal = document.getElementById("myModal");
  
    // Dohvati link za otvaranje modala
    var openModalLink = document.getElementById("openModal");
  
    // Dohvati element za zatvaranje modala
    var closeModalButton = document.getElementById("closeModal");
  
    // Kada korisnik klikne na link za otvaranje modala, otvori modal
    openModalLink.onclick = function() {
      modal.style.display = "block";
    }
  
    // Kada korisnik klikne na dugme za zatvaranje, zatvori modal
    closeModalButton.onclick = function() {
      modal.style.display = "none";
    }

    // Kada korisnik klikne izvan modala, zatvori modal
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  // Dohvati sve linkove telefonskih brojeva unutar modala
var phoneNumbers = document.getElementsByClassName("phone-number");

// Kada korisnik klikne na bilo koji od brojeva telefona, zatvori modal
for (var i = 0; i < phoneNumbers.length; i++) {
  phoneNumbers[i].onclick = function() {
    modal.style.display = "none";
  }
}