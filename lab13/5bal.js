let numbers = [10, 20, 30, 40, 50];

numbers.splice(Math.floor(numbers.length / 2), 0, 777); // 0 - видаляємо 0 елементів, 777 - додаємо

console.log(numbers);
