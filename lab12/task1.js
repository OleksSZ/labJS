const readline = require('readline');
const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Введіть кількість останніх елементів для виведення: ", (answer) => {
    const n = Number(answer);


    const [...останні] = numbers.slice(-n);

    console.log(останні);  });
