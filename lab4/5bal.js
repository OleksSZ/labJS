const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Введи оцінку від 0 до 100: ", (input) => {
  let ocinka = Number(input);

  let rezultat =
    ocinka >= 90 ? "Відмінно" :
    ocinka >= 70 ? "Добре"    :
    ocinka >= 50 ? "Задовільно" :
    "Не склав";

  console.log(rezultat || "Введи нормальне число 😄");

  rl.close();
});