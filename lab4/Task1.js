const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function запитати(питання, callback) {
  rl.question(питання, callback);
}

// ─── 1. Перевірка пароля на початку ────────────────────────────────
запитати('Введіть пароль: ', (password) => {
  if (password !== 'admin123') {
    console.log('Доступ заборонено ❌');
    console.log('Програма завершена.');
    rl.close();
    return; // виходимо з програми
  }

  console.log('Доступ дозволено ✅\n');

  // ─── Якщо пароль правильний — продовжуємо ────────────────────────

  // 2. Температура
  запитати('Температура (°C): ', (відповідь) => {
    let temperature = Number(відповідь.trim());

    if (isNaN(temperature)) {
      console.log('Помилка: потрібно ввести число');
    } else if (temperature <= 0) {
      console.log(`Дуже холодно ❄️  (${temperature}°C)`);
    } else if (temperature <= 15) {
      console.log(`Холодно 🧣 (${temperature}°C)`);
    } else if (temperature <= 25) {
      console.log(`Тепло 🌤️ (${temperature}°C)`);
    } else {
      console.log(`Спекотно 🔥 (${temperature}°C)`);
    }

    // 3. Парне / непарне
    запитати('Введіть число для перевірки парності: ', (відповідь2) => {
      let number = Number(відповідь2.trim());

      if (isNaN(number)) {
        console.log('Це не число');
      } else {
        const повідомлення = number % 2 === 0
          ? `${number} — парне число`
          : `${number} — непарне число`;
        console.log(повідомлення);
      }

      // 4. День тижня
      запитати('Введіть день тижня: ', (dayInput) => {
        const day = dayInput.trim().toLowerCase();

        switch (day) {
          case 'понеділок':
            console.log('Понеділок — початок тижня...');
            break;
          case 'вівторок':
            console.log('Вівторок');
            break;
          case 'середа':
            console.log('Середа — середина тижня');
            break;
          case 'четвер':
            console.log('Четвер — вже близько до вихідних');
            break;
          case 'п\'ятниця':
          case 'пятниця':
            console.log('П\'ятниця! Урааа 🎉');
            break;
          case 'субота':
          case 'неділя':
            console.log('Вихідні 😎');
            break;
          default:
            console.log('Не розпізнано як день тижня');
        }

        console.log('\nПрограма завершена.');
        rl.close();
      });
    });
  });
});