const numbers = [7, 3, 8, 3, 1, 7, 9, 1, 4, 8, 3];

const seen = {};
const unique = [];

for (const num of numbers) {
    if (!seen[num]) {
        seen[num] = true;
        unique.push(num);
    }
}

console.log(unique);

// Треба було видалити повторювані числа з массиву , якщо що  
// то seen ми використовуємо для відстеження вже побачених чисел, а unique для зберігання унікальних чисел.