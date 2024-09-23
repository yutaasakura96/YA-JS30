# Joke Teller Robot 🤖

A fun web application that tells programming jokes using JokeAPI and reads them aloud using the VoiceRSS Text-to-Speech API. This app uses serverless functions hosted on Netlify to securely handle the API key for the text-to-speech functionality.

## Features

- Fetches programming jokes from the JokeAPI.
- Uses VoiceRSS to convert the jokes to speech.
- Responsive design with a simple and fun UI.
- Serverless function on Netlify for securely handling the VoiceRSS API key.

## Demo

You can try the live version of the app here: [Joke Teller Robot](https://ya-js30-project12.netlify.app/)

## Technologies Used

- **HTML/CSS/JavaScript** for building the frontend.
- **VoiceRSS** API for Text-to-Speech functionality.
- **JokeAPI** for fetching programming jokes.
- **Netlify Functions** for securing API keys.
- **Netlify** for deployment and hosting.

## Project Setup

### Prerequisites

To run this project locally, you will need:

- A VoiceRSS API key. You can get one by signing up at [VoiceRSS](https://www.voicerss.org/).
- A Netlify account to deploy the project and manage environment variables.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/joke-teller-robot.git
   cd joke-teller-robot
   ```

2. Install the Netlify CLI if you haven't already:

   ```bash
   npm install -g netlify-cli
   ```

3. Set up the `.env` file with your VoiceRSS API key:

   ```bash
   echo "VOICE_RSS_API_KEY=your_api_key_here" > .env
   ```

4. Link the project to your Netlify account:

   ```bash
   netlify link
   ```

### Running the Project Locally

To run the project locally, use the following command:

```bash
netlify dev
```

This will start a local development server at `http://localhost:8888`.

### Deploying to Netlify

1. To deploy the app to Netlify, run:

   ```bash
   netlify deploy --prod
   ```

2. Your app will be live at the Netlify-generated URL.

## Project Structure

```
/project-root
  /netlify
    /functions
      get-voicerss.js    # Serverless function for handling the VoiceRSS API key
  index.html             # Main HTML file
  script.js              # JavaScript logic for fetching jokes and playing audio
  style.css              # CSS for the app's styling
  robot.gif              # Background GIF used in the design
  README.md              # Project documentation
  .env                   # Environment variables (API key)
  netlify.toml           # Netlify configuration file
```

## How It Works

1. **Fetching Jokes**: The app fetches programming jokes from the JokeAPI when you click the "Tell Me A Joke" button.
2. **Text-to-Speech**: The joke is passed to the VoiceRSS API for text-to-speech conversion. The VoiceRSS API key is securely retrieved using a serverless function hosted on Netlify.
3. **Playing the Audio**: The converted audio is played in the browser using the HTML `<audio>` element.

## API References

- **VoiceRSS API**: [https://www.voicerss.org/](https://www.voicerss.org/)
- **JokeAPI**: [https://jokeapi.dev/](https://jokeapi.dev/)

## License

This project is open-source and available under the MIT License.
