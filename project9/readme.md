# Random Quote Generator 📝💬

A simple and elegant **Random Quote Generator** built using HTML, CSS, and JavaScript. This project displays a random quote from an API with an option to tweet the quote directly via Twitter.

## Features 🚀
- **Random Quotes**: Fetches and displays a random quote each time you click "New Quote".
- **Quote from API**: The quotes are fetched from a public API.
- **Tweet Quotes**: Share the displayed quote directly on Twitter with one click.
- **Loader Animation**: Shows a loading spinner while fetching a new quote.
- **Responsive Design**: Fully responsive design that works well on all screen sizes.

## Project Structure 📁

```
project-root/
│
├── index.html         # Main HTML file
├── style.css          # CSS file for styling the page
├── script.js          # JavaScript file for fetching and displaying quotes
├── quotes.js          # Contains fallback quotes if the API fails
└── README.md          # Project documentation
```

## Technologies Used 🛠️

- **HTML5**: Structure and layout of the webpage.
- **CSS3**: Custom styles for the quote container, buttons, and loader animation.
- **JavaScript (ES6)**: Handles fetching quotes from the API and implementing functionality such as displaying and tweeting quotes.
- **FontAwesome**: Icons used for the quote, Twitter button, and loader.

## How It Works 🔍

- **Random Quotes**: The quotes are fetched from the [JacintoDesign API](https://jacintodesign.github.io/quotes-api/).
- **Error Handling**: If the API fails, the app will load a set of local quotes from the `quotes.js` file.
- **Loading Spinner**: A loader is shown while fetching a new quote.

## Customization 🛠️

- You can replace the API URL in the `script.js` file with your own source of quotes.
- Modify the appearance by editing the styles in the `style.css` file.

## License 📄

This project is licensed under the MIT License. Feel free to use, modify, and distribute it.

---

Created and Coded by [Yuta Asakura](https://asakurayuta.dev)

### Key Sections:
- **Features**: Highlights key features like random quotes, API integration, and Twitter sharing.
- **How to Use**: Instructions for setting up and running the project locally.
- **Technologies Used**: Lists the tech stack used in the project.
- **Project Structure**: Brief overview of the files included in the project.
- **Customization**: Encourages users to modify the API and CSS to personalize the project.
