function updateTimeOfDay() {
  const hour = new Date().getHours();
  const greetingEl = document.getElementById('greeting');
  const timeEl = document.getElementById('time-display');

  let greetingText = "";
  let bodyClass = "";

  if (hour >= 5 && hour < 12) {
    greetingText = "Доброго ранку!";
    bodyClass = "morning";
  } 
  else if (hour >= 12 && hour < 17) {
    greetingText = "Доброго дня!";
    bodyClass = "day";
  } 
  else if (hour >= 17 && hour < 22) {
    greetingText = "Доброго вечора!";
    bodyClass = "evening";
  } 
  else {
    greetingText = "Доброї ночі!";
    bodyClass = "night";
  }

  // оновлюємо текст
  greetingEl.textContent = greetingText;

  document.body.className = bodyClass;

  // показуємо поточний час
  const now = new Date().toLocaleTimeString('uk-UA', {
    hour: '2-digit',
    minute: '2-digit'
  });
  timeEl.textContent = `Зараз ${now}`;
}


updateTimeOfDay();


setInterval(updateTimeOfDay, 60000);