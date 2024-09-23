# Unsplash API - Infinite Scroll

A web app that fetches random photos from the Unsplash API and displays them in an infinite scrolling layout. As the user scrolls down, more photos are loaded automatically. This project leverages a serverless function using Netlify to securely fetch photos from Unsplash without exposing the API key in the frontend.

## Features
- Fetches random photos from Unsplash.
- Infinite scrolling for seamless user experience.
- Responsive design for mobile and desktop.
- Serverless function (via Netlify) to securely fetch photos.

## Demo
Check out the live demo [here](https://ya-js30-project-10.netlify.app/).

## Technologies Used
- **HTML5 & CSS3**: For the structure and styling of the web app.
- **JavaScript**: For dynamic loading of images and infinite scroll functionality.
- **Unsplash API**: To fetch random photos.
- **Netlify Serverless Functions**: To securely interact with the Unsplash API.

## How It Works
1. The app initially fetches 5 random photos from Unsplash using a serverless function hosted on Netlify.
2. As the user scrolls, additional batches of 30 photos are loaded.
3. The photos are dynamically inserted into the page using JavaScript.
4. The serverless function ensures that the Unsplash API key is not exposed in the frontend.

## Setup Instructions

### Prerequisites
- Node.js and npm installed.
- A free [Unsplash API](https://unsplash.com/developers) key.

### Clone the repository
```bash
git clone https://github.com/your-username/project10.git
cd project10
```

### Install dependencies
```bash
npm install
```

### Environment Variables
Create a `.env` file in the root directory and add your Unsplash API key:
```bash
UNSPLASH_API_KEY=your-unsplash-api-key
```

### Run Locally
To run the app locally with Netlify Dev:
```bash
netlify dev
```
This will start a local server and proxy the serverless functions.

### Deployment
The app is designed to be deployed on Netlify. After linking the project to Netlify:
1. Deploy the site:
   ```bash
   netlify deploy --prod
   ```
2. Add your `UNSPLASH_API_KEY` in the Netlify dashboard under **Site Settings** > **Build & deploy** > **Environment**.

## File Structure
```
├── index.html               # Main HTML file
├── style.css                # Styling for the app
├── script.js                # JavaScript for infinite scroll functionality
├── netlify.toml             # Netlify configuration file
└── netlify/
    └── functions/
        └── getUnsplashPhotos.js  # Netlify serverless function to fetch Unsplash photos
```

## Credits
- Font used: [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue)
- Images from [Unsplash](https://unsplash.com).

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

### Key Points Covered in the README:
- Description of the project and features.
- Live demo link.
- Technologies used.
- Detailed instructions for setup, environment variables, running locally, and deployment on Netlify.
- File structure breakdown.
