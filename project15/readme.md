# NASA API Pictures 🌌

This web app allows users to view stunning images from NASA's Astronomy Picture of the Day (APOD) API. Users can browse NASA's images, read about each one, and add their favorite images to a personalized favorites list. The app stores favorites locally, ensuring they persist between sessions.

## Features 🚀

- **NASA Astronomy Pictures**: Loads images directly from NASA's APOD API.
- **Add to Favorites**: Save your favorite NASA pictures to a local collection.
- **Remove Favorites**: Manage your favorites by removing them as needed.
- **Responsive Design**: Fully responsive layout for optimal viewing on all devices.
- **Lazy Loading Images**: Images are loaded only when needed to optimize performance.
- **Loading Animation**: A rocket-themed loader animation appears while fetching new images.

## How It Works 🛠️

1. **Fetch NASA Images**: The app makes an API call to NASA's APOD API to fetch 10 images at a time.
2. **Save to Favorites**: Users can click "Add To Favorites" to store an image in their local favorites.
3. **View Favorites**: Switch between viewing all images and your favorite images with one click.
4. **Remove from Favorites**: Easily remove images from your favorites list.
5. **Local Storage**: The app uses `localStorage` to persist your favorite images, so they remain saved even when the page is refreshed.

## Technologies Used 💻

- **HTML5**: For the structure of the app.
- **CSS3**: For styling and responsive layout.
- **JavaScript (ES6)**: Handles the logic for fetching images, managing favorites, and updating the DOM.
- **NASA API**: Retrieves stunning astronomy images from NASA's APOD service.
- **LocalStorage**: Stores the user's favorite images for persistence.

## How to Use 🔧

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/nasa-api-pictures.git

	2.	Navigate to the project directory:

cd nasa-api-pictures


	3.	Open the index.html file in your browser:

open index.html


	4.	Browse NASA Images: Click “Load More” to fetch 10 new NASA images.
	5.	Save to Favorites: Click “Add to Favorites” below an image to store it.
	6.	View Favorites: Click the “Favorites” link to switch to your favorites list.
	7.	Remove from Favorites: In the favorites list, click “Remove Favorite” to delete an image from your saved collection.

Project Structure 📂

project-root/
│
├── index.html         # Main HTML file
├── style.css          # Styles for the app
├── script.js          # JavaScript for API calls and functionality
├── rocket.svg         # Loading animation asset
├── README.md          # Project documentation

NASA API Key 🔑

The app uses NASA’s APOD API, which requires an API key. By default, the demo key (DEMO_KEY) is used, but you can replace this with your own API key for higher request limits.

To get your own API key:

	1.	Visit the NASA API Portal.
	2.	Sign up and generate your free API key.
	3.	Replace the DEMO_KEY in the script.js file with your new API key.

Future Improvements 🛠️

	•	Search Functionality: Add a search bar to allow users to search for specific images by date.
	•	Load More Favorites: Implement pagination for the favorites section.

License 📄

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as you see fit.

Created and coded by Yuta Asakura
