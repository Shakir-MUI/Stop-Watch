let timer = null;
let count = 0;
let isRunning = false;

const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

// Format and update the display
function updateDisplay() {
  let milliseconds = Math.floor((count % 100));
  let seconds = Math.floor((count / 100) % 60);
  let minutes = Math.floor((count / 6000) % 60);
  let hours = Math.floor(count / 360000);

  let formattedTime = 
    hours.toString().padStart(2, '0') + ":" +
    minutes.toString().padStart(2, '0') + ":" +
    seconds.toString().padStart(2, '0') + "." +
    milliseconds.toString().padStart(2, '0');

  display.textContent = formattedTime;
}

// Start Timer
function startTimer() {
  if (isRunning) return;
  isRunning = true;
  display.classList.add("running");

  timer = setInterval(() => {
    count++;
    updateDisplay();
  }, 10);
}

// Pause Timer
function pauseTimer() {
  isRunning = false;
  clearInterval(timer);
  display.classList.remove("running");
}

// Reset Timer
function resetTimer() {
  isRunning = false;
  clearInterval(timer);
  count = 0;
  updateDisplay();
  display.classList.remove("running");
}

// Event Listeners
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

// Initialize display
updateDisplay();
