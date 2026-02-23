let timerInterval = null;
let seconds = 0;

const display = document.getElementById('timer');
const startBtn  = document.getElementById('start');
const pauseBtn  = document.getElementById('pause');
const resetBtn  = document.getElementById('reset');

function formatTime(s) {
  const hrs  = Math.floor(s / 3600).toString().padStart(2, '0');
  const mins = Math.floor((s % 3600) / 60).toString().padStart(2, '0');
  const secs = (s % 60).toString().padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
}

function updateDisplay() {
  display.textContent = formatTime(seconds);
}

function startTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);
    startBtn.disabled = true;
    pauseBtn.disabled = false;
  }
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  startBtn.disabled = false;
  pauseBtn.disabled = true;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  seconds = 0;
  updateDisplay();
  startBtn.disabled = false;
  pauseBtn.disabled = true;
}

// Початковий стан кнопок
pauseBtn.disabled = true;

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);