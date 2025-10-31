// Intentionally problematic JS
// Carousel auto-advance without pause/controls
const carousel = document.querySelector('.carousel');
const slides = Array.from(document.querySelectorAll('.slide'));
let idx = 0;
setInterval(() => {
  idx = (idx + 1) % slides.length;
  carousel.scrollTo({ left: idx * carousel.clientWidth, behavior: 'smooth' });
}, 2000);

// Modal with keyboard trap (no escape, no focus return)
const openBtn = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeX = document.getElementById('closeModal');
openBtn.addEventListener('click', () => {
  modal.hidden = false;
  modal.setAttribute('aria-hidden', 'false');
  const content = modal.querySelector('.modal-content');
  content.focus(); // focus into modal, but no trap mgmt and no escape
});
closeX.addEventListener('click', () => {
  modal.hidden = true;
  modal.setAttribute('aria-hidden', 'true');
});

// Submit-like span does nothing keyboard-wise
document.querySelector('.submit-like').addEventListener('click', () => alert('Submitted (not really).'));
