const card = document.getElementById('card');
const mainText = document.getElementById('mainText');

const messages = [
  "SYSTEM HACKED",
  "ACCESS GRANTED",
  "NEURAL LINK ESTABLISHED",
  "DATA BREACH DETECTED",
  "QUANTUM JUMP INITIATED",
  "010101... ERROR",
  "OVERCLOCK MODE",
  "FIREWALL COLLAPSED",
  "VOID PROTOCOL ACTIVE",
  "SYNAPSE OVERLOAD"
];

let clickCount = 0;

card.addEventListener('dblclick', () => {
  clickCount++;
  
  const randomMsg = messages[Math.floor(Math.random() * messages.length)];
  
  mainText.textContent = randomMsg;
  mainText.classList.add('glitch');

  // убираем glitch-анимацию через 2.5 секунды
  setTimeout(() => {
    mainText.classList.remove('glitch');
  }, 2500);

  // после 5 двойных кликов — "перезагрузка"
  if (clickCount >= 5) {
    setTimeout(() => {
      mainText.textContent = "NEON CORE";
      clickCount = 0;
    }, 3200);
  }
});