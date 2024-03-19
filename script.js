const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel-images img');

let isDragging = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
  isDragging = false;
});

carousel.addEventListener('mouseup', () => {
  isDragging = false;
});

carousel.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 3;
  carousel.scrollLeft = scrollLeft - walk;
});

carousel.addEventListener('scroll', () => {
  const { scrollWidth, scrollLeft, clientWidth } = carousel;
  const threshold = 10; //mudar fluidez scroll

  if (scrollLeft < threshold) {
    carousel.scrollLeft = scrollLeft + scrollWidth - threshold;
  } else if (scrollLeft + clientWidth > scrollWidth - threshold) {
    carousel.scrollLeft = threshold;
  }
});


carousel.addEventListener('dragstart', (e) => {
  e.preventDefault();
});