// Simple hero slider for the home page

const slides = Array.from(document.querySelectorAll(".hero-slide"));
const dotsContainer = document.querySelector(".hero-dots");
const prevBtn = document.querySelector(".hero-arrow-left");
const nextBtn = document.querySelector(".hero-arrow-right");

if (slides.length > 0 && dotsContainer) {
  let current = 0;
  let timer = null;

  // Create dots
  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  const dots = Array.from(dotsContainer.querySelectorAll("button"));

  function goToSlide(index) {
    slides[current].classList.remove("active");
    dots[current].classList.remove("active");

    current = (index + slides.length) % slides.length;

    slides[current].classList.add("active");
    dots[current].classList.add("active");
    restartTimer();
  }

  function nextSlide() {
    goToSlide(current + 1);
  }

  function prevSlide() {
    goToSlide(current - 1);
  }

  function restartTimer() {
    if (timer) clearInterval(timer);
    timer = setInterval(nextSlide, 7000);
  }

  if (nextBtn) nextBtn.addEventListener("click", nextSlide);
  if (prevBtn) prevBtn.addEventListener("click", prevSlide);

  restartTimer();
}
// Simple hero slider for the home page

document.addEventListener("DOMContentLoaded", function () {
  const slides = Array.from(document.querySelectorAll(".hero-slide"));
  if (!slides.length) return;

  const prevBtn = document.querySelector(".hero-prev");
  const nextBtn = document.querySelector(".hero-next");

  let index = 0;
  let timer = null;

  function show(i) {
    slides.forEach((s, idx) => {
      s.classList.toggle("active", idx === i);
    });
    index = i;
  }

  function next() {
    show((index + 1) % slides.length);
  }

  function prev() {
    show((index - 1 + slides.length) % slides.length);
  }

  if (nextBtn) nextBtn.addEventListener("click", () => {
    next();
    restart();
  });

  if (prevBtn) prevBtn.addEventListener("click", () => {
    prev();
    restart();
  });

  function restart() {
    if (timer) clearInterval(timer);
    timer = setInterval(next, 7000);
  }

  restart();
});
