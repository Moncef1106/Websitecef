// swipe.js
const moncefContainer = document.querySelector('.moncef-container');
const aaronImage = document.getElementById('aaron-image');
const travisScottImage = document.getElementById('travisscott-image');

let currentImageIndex = 0;

moncefContainer.addEventListener('touchstart', handleTouchStart);
moncefContainer.addEventListener('touchmove', handleTouchMove);

function handleTouchStart(event) {
  startX = event.touches[0].clientX;
}

function handleTouchMove(event) {
  if (!startX) return;

  const currentX = event.touches[0].clientX;
  const diffX = currentX - startX;

  if (diffX > 50) {
    // Swipe right
    showNextImage();
  } else if (diffX < -50) {
    // Swipe left (optional: handle swiping back to Moncef image)
    showPreviousImage();
  }
}

function showNextImage() {
  if (currentImageIndex === 0) {
    aaronImage.classList.remove('hidden');
    currentImageIndex = 1;
  } else if (currentImageIndex === 1) {
    travisScottImage.classList.remove('hidden');
    currentImageIndex = 2;
  }
}

function showPreviousImage() {
  if (currentImageIndex === 2) {
    travisScottImage.classList.add('hidden');
    currentImageIndex = 1;
  } else if (currentImageIndex === 1) {
    aaronImage.classList.add('hidden');
    currentImageIndex = 0;
  }
}
