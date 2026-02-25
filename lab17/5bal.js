const рядки = ["hello", "world", "js", "javascript", "cat"];

const результат = рядки.map(стр => ({
    length: стр.length
}));

console.log(результат);