
AOS.init();

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
}
const content = document.getElementById('aboutContent');
  const btn = document.getElementById('aboutToggle');

  function updateBtn(){
    const expanded = content.classList.contains('is-expanded');
    btn.textContent = expanded ? 'Ver menos' : 'Ver mais';
    btn.setAttribute('aria-expanded', expanded);
    content.setAttribute('aria-expanded', expanded);
  }

  btn.addEventListener('click', () => {
    content.classList.toggle('is-collapsed');
    content.classList.toggle('is-expanded');
    updateBtn();
  });

  // estado inicial: colapsado
  updateBtn();

