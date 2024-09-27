const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdown-form");
const dateEl = document.getElementById("date-picker");

const countdownEl = document.getElementById("countdown");
const countdownElTitle = document.getElementById("countdown-title");
const countdownBtn = document.getElementById("countdown-button");
const timeElements = document.querySelectorAll("span");

let countdownTitle = "";
let countdownDate = "";
let countdownValue = Date;
let countdownActive;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Get today's date in JST (Japan Standard Time)
const today = new Date().toLocaleDateString("en-CA", {
  timeZone: "Asia/Tokyo",
});

// Convert it to a Date object and add 1 day to get tomorrow's date
const todayDate = new Date(today);
todayDate.setDate(todayDate.getDate() + 1);

// Format tomorrow's date as 'YYYY-MM-DD' and set it as the min value
const tomorrow = todayDate.toLocaleDateString("en-CA");
dateEl.setAttribute("min", tomorrow);

// Populate Countdown / Complete UI
function updateDOM() {
  countdownActive = setInterval(() => {
    // Get the current time and adjust it for Japan Standard Time (UTC+9)
    const now = new Date().getTime() + 9 * hour; // Adjusting for UTC+9 (JST)

    const distance = countdownValue - now;
    console.log("distance", distance);

    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);
    console.log(days, hours, minutes, seconds);

    // Populate Countdown
    countdownElTitle.textContent = `${countdownTitle}`;
    timeElements[0].textContent = `${days}`;
    timeElements[1].textContent = `${hours}`;
    timeElements[2].textContent = `${minutes}`;
    timeElements[3].textContent = `${seconds}`;

    // Hide Input
    inputContainer.hidden = true;
    // Show Countdown
    countdownEl.hidden = false;
  }, second);
}

// Take Values from Form Input
function updateCountdown(e) {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
  console.log(countdownTitle, countdownDate);
  // Check for valid date
  if (countdownDate === "") {
    alert("Please select a valid date for the countdown");
  } else {
    // Get number version of current Date, update DOM
    countdownValue = new Date(countdownDate).getTime();
    console.log("Countdown value:", countdownValue);
    updateDOM();
  }
}

// Reset Countdown
function reset() {
  // Hide Countdowns, Show Input
  countdownEl.hidden = true;
  inputContainer.hidden = false;
  // Stop Countdown
  clearInterval(countdownActive);
  // Reset Values
  countdownTitle = "";
  countdownDate = "";
}

// Event Listeners
countdownForm.addEventListener("submit", updateCountdown);
countdownBtn.addEventListener("click", reset);
