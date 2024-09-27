# Custom Countdown ⏳

A dynamic and customizable countdown timer built using HTML, CSS, and JavaScript. This project allows users to create a countdown for any upcoming event with a visually appealing video background.

## Features 🚀

- **Custom Countdown**: Users can input a title and select a future date to create a personalized countdown.
- **Responsive Design**: Fully responsive layout that works on both desktop and mobile devices.
- **Video Background**: A looping video background enhances the visual experience.
- **Persistent Storage**: The countdown is stored in the browser's `localStorage`, so it remains even after refreshing the page.
- **Complete State**: When the countdown finishes, a completion message is displayed with an animated title.

## Technologies Used 🛠️

- **HTML5**: Provides the structure of the web page.
- **CSS3**: Handles the styling and layout, including the video background and responsive design.
- **JavaScript (ES6)**: Implements countdown functionality, form handling, and local storage for persistence.

## Project Structure 📂

```
project-root/
│
├── index.html         # Main HTML file
├── style.css          # Custom styles for the countdown and layout
├── script.js          # JavaScript for countdown logic and localStorage
├── time.mp4           # Video background file
└── README.md          # Project documentation
```

## How to Use 🔧

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/custom-countdown.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd custom-countdown
   ```

3. **Open the `index.html` file in your browser**:
   ```bash
   open index.html
   ```

4. **Set a Countdown**:
   - Enter a title for the event you're counting down to.
   - Select a future date from the date picker.
   - Click 'Submit' to start the countdown.

5. **Reset or Create a New Countdown**:
   - Once the countdown ends, you can create a new one by clicking the "New Countdown" button.

## How It Works 🔍

- **Custom Countdown**: Users can input a title and choose a future date for the countdown.
- **Video Background**: A looping video serves as the background, enhancing the aesthetics of the countdown.
- **Persistent Countdown**: The countdown data (title and date) is saved in `localStorage` so that even if the page is refreshed, the countdown will continue.
- **Completion Message**: Once the countdown reaches zero, a message is displayed, indicating that the event is complete.

## Future Improvements 🛠️

- **Add Sound Alerts**: Play a sound when the countdown ends.
- **Multiple Countdowns**: Allow users to create and manage multiple countdowns.
- **Theme Options**: Add light/dark mode toggles.

## License 📄

This project is licensed under the MIT License. Feel free to use, modify, and distribute it.

---

Created and Coded by [Yuta Asakura](https://asakurayuta.dev)
```

### Key Sections:
- **Features**: Describes key features such as custom countdowns, responsive design, and video background.
- **How to Use**: Provides instructions for setting up the project locally.
- **Project Structure**: Overview of the main files in the project.
- **How It Works**: Explains the core functionality like the countdown process and localStorage usage.
- **Future Improvements**: Optional section for potential future features.
