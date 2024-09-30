# Bookmark App 🔖

A simple bookmark manager app that allows users to save, manage, and access their favorite websites easily. Built with HTML, CSS, and JavaScript, this app stores your bookmarks locally in the browser using `localStorage`.

## Features 🚀

- **Add Bookmarks**: Save your favorite websites by entering a name and URL.
- **Manage Bookmarks**: View and delete bookmarks with an intuitive interface.
- **Favicon Display**: The app fetches and displays the favicon for each saved website.
- **Persistent Storage**: Bookmarks are stored using `localStorage`, so they remain saved even after refreshing the page.
- **Responsive Design**: Fully responsive layout, optimized for both desktop and mobile devices.

## How to Use 🔧

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/bookmark-app.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd bookmark-app
   ```

3. **Open the `index.html` file in your browser**:
   ```bash
   open index.html
   ```

4. **Add a Bookmark**:
   - Click the "Add Bookmark" button.
   - Enter the website name and URL.
   - Click "Save" to add the bookmark to the list.

5. **Manage Bookmarks**:
   - View saved bookmarks in the container.
   - Click the "X" icon next to a bookmark to delete it.

## Technologies Used 🛠️

- **HTML5**: Structure of the app.
- **CSS3**: Styling, layout, and responsive design.
- **JavaScript (ES6)**: Logic for bookmark management, form validation, and `localStorage`.

## Project Structure 📂

```
project-root/
│
├── index.html         # Main HTML file
├── style.css          # Styles for the app
├── script.js          # JavaScript for bookmark functionality
├── README.md          # Project documentation
```

## How It Works 🔍

- **Bookmark Saving**: Users can input a name and URL for the website they want to save. If the URL does not include "http://", it automatically adds it to ensure proper functionality.
- **Validation**: The app validates that both the name and URL fields are filled out, and that the URL is a valid web address.
- **Favicon Fetching**: The app uses Google’s favicon API to display each website’s icon next to its link.
- **LocalStorage**: The bookmarks are saved to the browser's `localStorage`, allowing them to persist even after the page is refreshed.

## Media Assets 🎨

- **Favicon**: The app's favicon is sourced from [Google's Favicon API](https://www.google.com/s2/favicons?domain=asakurayuta.dev).

## Future Improvements 🔧

- **Bookmark Editing**: Add functionality to edit existing bookmarks.
- **Categories**: Enable users to organize bookmarks into different categories or folders.
- **Search Functionality**: Implement a search bar to quickly find bookmarks.

## License 📄

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as you see fit.

---

Created and Coded by [Yuta Asakura](https://asakurayuta.dev)
