const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Введи число для таблиці множення: ", (input) => {
  let number = Number(input);

  console.log(`Таблиця множення на ${number} :`);
  console.log("──────────────────────────");
  
  for (let i = 1; i <= 10; i++) {
      let result = number * i;
      console.log(number + " × " + i + " = " + result);
  }
  
  console.log("──────────────────────────");});