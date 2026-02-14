// 1. Цикл for: парні числа від 1 до 20
console.log("1. Парні числа від 1 до 20:");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
// або коротший варіант:
// for (let i = 2; i <= 20; i += 2) {
//     console.log(i);
// }

console.log("-------------------");

// 2. Цикл while: від n до 1
console.log("2. Зворотний відлік (while):");
let n = 8; // можна замінити на prompt("Введи число:")
let counter = n;

while (counter >= 1) {
    console.log(counter);
    counter--;
}

console.log("-------------------");

// 3. do...while: поки не введуть позитивне число
console.log("3. do...while — введи позитивне число (в коді імітуємо):");

// Імітація введення (бо в консолі браузера prompt блокує виконання)
let userInput;
let attempts = 0;

do {
    // В реальному коді тут був би: userInput = Number(prompt("Введи позитивне число:"));
    
    // Імітація для прикладу:
    attempts++;
    if (attempts === 1) userInput = -5;
    else if (attempts === 2) userInput = 0;
    else if (attempts === 3) userInput = 42;

    console.log(`Спроба ${attempts}: введено ${userInput}`);
} while (userInput <= 0);

console.log("Нарешті позитивне число:", userInput);

console.log("-------------------");

// 4. for...in — об'єкт
console.log("4. for...in з об'єктом:");
const person = {
    name: "Олег",
    age: 29,
    city: "Львів",
    isStudent: false,
    hobby: "гітара"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

console.log("-------------------");

// 5. for...of — масив у зворотному порядку
console.log("5. for...of — масив задом наперед:");
const colors = ["червоний", "жовтий", "зелений", "синій", "фіолетовий"];

for (let i = colors.length - 1; i >= 0; i--) {
    console.log(colors[i]);
}

// Альтернатива через reverse() (але змінює оригінальний масив):
// for (let color of colors.reverse()) {
//     console.log(color);
// }

console.log("-------------------");

// 6. Методи масивів
const numbers = [3, 12, 7, 19, 4, 25, 8, 16, 1, 30];

console.log("6.1 forEach — вивести всі елементи:");
numbers.forEach((num, index) => {
    console.log(`[${index}] → ${num}`);
});

console.log("\n6.2 map — квадрати чисел:");
const squares = numbers.map(num => num * num);
console.log(squares);

console.log("\n6.3 filter — числа > 10:");
const bigNumbers = numbers.filter(num => num > 10);
console.log(bigNumbers);

console.log("-------------------");

// Бонус: break та continue
console.log("Бонус: break та continue");
for (let i = 1; i <= 15; i++) {
    if (i === 5) {
        console.log("Пропускаємо 5 (continue)");
        continue;
    }
    if (i === 12) {
        console.log("Досягнуто 12 — виходимо (break)");
        break;
    }
    console.log(i);
}