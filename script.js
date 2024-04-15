let slideIndex = 1;
showSlides(slideIndex);

function moveSlide(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  const slides = document
    .getElementsByClassName("slide-container")[0]
    .getElementsByTagName("img");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
let currentIndex = 0;

function displaySlide(index) {
  const slider = document.querySelector(".card-slider");
  const slideWidth = document.querySelector(".card").offsetWidth;
  slider.style.transform = `translateX(-${slideWidth * index}px)`;
}

function moveNext() {
  currentIndex++;
  displaySlide(currentIndex);
}

function movePrev() {
  currentIndex--;
  displaySlide(currentIndex);
}

displaySlide(currentIndex);
