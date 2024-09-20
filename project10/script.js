import 'dotenv/config';

const count = 10;
const apiKey = 'apikey'
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

// Get photo from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    // Catch Error here
  }
}

// On Load
getPhotos();
