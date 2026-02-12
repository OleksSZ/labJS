function add(a, b, c) {
    // Перетворюємо всі аргументи в числа(Провсяк випалок)
    const numA = Number(a);
    const numB = Number(b);
    const numC = Number(c);
    
    //перевіряємо , щоб всі данні були числами 
    if (isNaN(numA) || isNaN(numB) || isNaN(numC)) {
        console.log("Помилка: всі аргументи мають бути числами");
        return;
    }
    
    const result = numA + numB + numC;
    console.log(`Addition result equals ${result}`);
}

add(5, 3, 2);
add("10", 20, 5);
add("hello", 2, 3);