const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

let apiQuotes = [];
// Show New Quote From API
function newQuote() {
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // Check if Author field is blank
  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }

  // Check Quote length to determine text styling
  if (quote.text.length > 50) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;
}

function newLocalQuote() {
  // Pick a random quote from quotes.js
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  authorText.textContent = quote.author;
  quoteText.textContent = quote.text;
}

// Get Quotes From API
async function getQuotes() {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";

  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    console.error(
      "Error fetching API quotes, loading local quotes instead.",
      error
    );
    // Fallback to local quotes if API fails
    newLocalQuote();
  }
}

// Twiter Quote Functionality
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

// Event Listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// On Load
getQuotes();
