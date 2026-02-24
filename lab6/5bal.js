const numbers = [12, 5, 8, 21, 3, 18];

let min = numbers[0];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log("Масив:", numbers);
console.log("Мінімум:", min);
console.log("Максимум:", max);