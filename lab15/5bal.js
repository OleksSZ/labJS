function createCounter() {
    let count = 0;          // змінна "захоплюється" замиканням

    return function() {
        count += 1;
        return count;
    };
}

// використання
const counter = createCounter();

console.log(counter());  // 1
console.log(counter());  // 2
console.log(counter());  // 3
console.log(counter());  // 4