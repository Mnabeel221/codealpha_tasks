// === SELECT ELEMENTS ===
const slidesContainer = document.querySelector('.gallery-slides');
const slides = document.querySelectorAll('.gallery-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dots = document.querySelectorAll('.gallery-dot');

let currentIndex = 0;
const totalSlides = slides.length;

// === INITIALIZE GALLERY ===
function showSlide(index) {
  // Ensure index loops around
  if (index < 0) currentIndex = totalSlides - 1;
  else if (index >= totalSlides) currentIndex = 0;
  else currentIndex = index;

  // Move slides container
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Update active dot
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

// === BUTTON EVENTS ===
prevBtn.addEventListener('click', () => {
  showSlide(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

// === DOT EVENTS ===
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const index = parseInt(dot.dataset.index);
    showSlide(index);
  });
});

// === INITIAL VIEW ===
showSlide(currentIndex);
