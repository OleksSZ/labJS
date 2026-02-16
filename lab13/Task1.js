const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Введіть ваше ім'я: ", (name) => {
    rl.question("Введіть ваш вік: ", (age) => {
        rl.question("Введіть ваше місто: ", (city) => {
            showInfo(name, age, city);
            rl.close();
function showInfo(name, age, city) {
    console.log(`Ім'я: ${name}, вік: ${age}, місто: ${city}`);
}});});});