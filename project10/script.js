const imageContainer = document.querySelector(".image-container");
const loader = document.querySelector("loader");

let photosArray = [];

// Unsplash API
const count = 10;
// const apiKey = 'insert your unsplash api key here'
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

// Helper Function to Set Attributes on DOM elements
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Create Elements for Links & Photos, Add to DOM
function displayPhotos() {
  // Run Function for each object in photosArray
  photosArray.forEach((photo) => {
    // Create <a> to link to Unsplash
    const item = document.createElement("a");
    setAttributes(item, {
      href: photo.links.html,
      target: _blank,
    });
    // Create <img> for photo
    const img = document.createElement("img");
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo_description,
    });
    // Put <img> inside <a>, then put both isnide Image Container
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// Get photo from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    // Catch Error here
  }
}

// On Load
getPhotos();
