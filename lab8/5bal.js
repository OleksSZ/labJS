const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Введіть рядок: ", (input) => {

    function getFirstCharacter(str) {
    return str[0];
}
    let firstCharacter = getFirstCharacter(input);
    console.log("Перша літера рядка: " + firstCharacter);
    rl.close();
});