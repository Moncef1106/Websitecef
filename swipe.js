// swipe.js
const moncefImage = document.querySelector('.moncefpng');
const aaronImage = document.getElementById('aaron-image');
const travisScottImage = document.getElementById('travisscott-image');

function toggleImages() {
  if (moncefImage.src.endsWith('moncef.png')) {
    // Replace moncef.png with Aaron image
    moncefImage.src = aaronImage.src;
    resizeImage(moncefImage, 'lessHeight'); // Adjust the size for Aaron image
  } else if (moncefImage.src.endsWith('aaron.png')) {
    // Replace Aaron image with Travis Scott image
    moncefImage.src = travisScottImage.src;
    resizeImage(moncefImage, 'wider'); // Adjust the size for Travis Scott image
  } else {
    // If it's the Travis Scott image, go back to moncef.png
    moncefImage.src = 'moncef.png';
    resizeImage(moncefImage, 'original'); // Reset size to original
  }
}

function resizeImage(image, sizeType) {
  if (sizeType === 'lessHeight') {
    image.style.width = ''; // Reset any previous width adjustment
    image.style.height = '550px'; // Set a specific height for Aaron image
  } else if (sizeType === 'wider') {
    image.style.width = '730px'; // Set a specific width for Travis Scott image
    image.style.height = ''; // Reset any previous height adjustment
    image.style.transform = 'translateX(-120px)'; // Move the image to the left
  } else {
    // Reset to the original size
    image.style.width = '';
    image.style.height = '';
    image.style.transform = ''; // Reset transform
  }
}
