// Select the slider container and images
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');

// Track the current slide index
let currentSlide = 0;

// Set up the event listener for the right button
document.querySelector('.slider-button.right').addEventListener('click', () => {
  if (currentSlide < images.length - 1) {
    currentSlide++;
    updateSlider();
  }
});

// Set up the event listener for the left button
document.querySelector('.slider-button.left').addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlider();
  }
});

// Function to update the slider position based on the current slide
function updateSlider() {
  const offset = -currentSlide * 100; // Shift the images left by 100% of their width
  slider.style.transform = `translateX(${offset}%)`;
}
