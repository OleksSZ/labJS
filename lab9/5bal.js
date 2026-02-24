const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Введіть рядок чисел, розділених пробілом: ", (input) => {

    function getNegativeNumbers(str) {
    const numbers = str.split(' ').map(Number);
    return numbers.filter(num => num < 0);  //так тупо легше
}
    let negativeNumbers = getNegativeNumbers(input);
    console.log("Від'ємні числа: " + negativeNumbers.join(', '));
    rl.close();
});


