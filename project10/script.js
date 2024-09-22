const imageContainer = document.querySelector(".image-container");
const loader = document.querySelector(".loader");

// Unsplash API
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];
let count = 5;

// Use the Netlify serverless function to get Unsplash photos
const apiUrl = `/.netlify/functions/getUnsplashPhotos?count=${count}`;

// Check if all images were loaded
function imageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
    count = 30;
  }
}

// Helper Function to Set Attributes on DOM elements
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Create Elements for Links & Photos, Add to DOM
function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photosArray.length;
  photosArray.forEach((photo) => {
    const item = document.createElement("a");
    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });

    const img = document.createElement("img");
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    img.addEventListener("load", imageLoaded);
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// Get photos from Netlify serverless function
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (Array.isArray(data)) {
      photosArray = data;
      displayPhotos();
    } else {
      console.error("Unexpected response format:", data);
    }
  } catch (error) {
    console.error("Error fetching photos:", error);
  }
}

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});

// On Load
getPhotos();
