const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Введіть a: ", (a) => {

    rl.question("Введіть b: ", (b) => {

        rl.question("Введіть c: ", (c) => {

const getMax = (a, b, c) => Math.max(a, b, c);
console.log(`Найбільше число: ${getMax(a, b, c)}`);
            rl.close();
        });});});