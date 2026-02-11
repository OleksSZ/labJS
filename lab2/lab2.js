// 1. Створюємо три змінні різними способами
var oldSchoolName = "Іван Петренко";
let currentAge = 20;
const isStudent = true;

// 2. Визначаємо тип кожної змінної та виводимо в консоль
console.log("Тип oldSchoolName (var):", typeof oldSchoolName);     // string
console.log("Тип currentAge (let):",   typeof currentAge);        // number
console.log("Тип isStudent (const):",  typeof isStudent);         // boolean

// 3. Створюємо об'єкт
let student = {
    name: "Олена Кравець",
    age: 19,
    isStudent: true
};

// 4. Додаємо нове поле "університет" та виводимо об'єкт
student.university = "КНУ ім. Тараса Шевченка";

console.log("\nІнформація про студента:");
console.log(student);
console.log(`Ім'я: ${student.name}`);
console.log(`Вік: ${student.age}`);
console.log(`Студент: ${student.isStudent}`);
console.log(`Університет: ${student.university}`);

// 5. Зміна типу змінної, оголошеної через let
console.log("\nДо зміни типу:");
console.log("currentAge:", currentAge, "→ тип:", typeof currentAge);

currentAge = "двадцять";   // змінюємо число на рядок

console.log("Після зміни:");
console.log("currentAge:", currentAge, "→ тип:", typeof currentAge);

// 6. Спроба змінити значення const
console.log("\nСпроба змінити константу:");

console.log("Значення isStudent залишилось:", isStudent);
console.log("Змінити значення const неможливо — отримуємо помилку при спробі присвоєння");