// Simple hero slider
const slides = document.querySelectorAll('.hero-slider .slide');
const prevBtn = document.querySelector('.hero-slider .prev');
const nextBtn = document.querySelector('.hero-slider .next');

let current = 0;

function showSlide(index) {
  slides.forEach((s, i) => {
    s.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

if (slides.length > 0) {
  let timer = setInterval(nextSlide, 7000);

  nextBtn && nextBtn.addEventListener('click', () => {
    clearInterval(timer);
    nextSlide();
  });

  prevBtn && prevBtn.addEventListener('click', () => {
    clearInterval(timer);
    prevSlide();
  });
}
