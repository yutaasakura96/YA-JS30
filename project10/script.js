const imageContainer = document.querySelector(".image-container");
const loader = document.querySelector(".loader");

// Unsplash API
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];
let count = 5;

// Use the Netlify serverless function to get Unsplash photos this will protect your UNSPLASH API KEY from being exposed
const apiUrl = `/.netlify/functions/getUnsplashPhotos?count=${count}`;

// If you are not deploying this project use this method
// const apiKey = "Insert your unsplash API key here";
// const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

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
  // Run function for each object in photos array
  photosArray.forEach((photo) => {
    // Create <a> to link to Unsplash
    const item = document.createElement("a");
    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });

    // Create <img> for photo
    const img = document.createElement("img");
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    img.addEventListener("load", imageLoaded);
    // Put <img> inside <a>, then put both inside Image Container
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
    console.error("Error fetching photos:", error);
  }
}

window.addEventListener("scroll", (e) => {
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
