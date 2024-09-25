const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdown-form");
const dateEl = document.getElementById("date-picker");

// Set Date Input Min with Today's Date
const today = new Date().toLocaleDateString("en-CA", {
  timeZone: "Asia/Tokyo",
});
console.log(today);
dateEl.setAttribute("min", today);
