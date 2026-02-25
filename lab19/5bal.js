const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const парні   = numbers.filter(n => n % 2 === 0).length;
const непарні = numbers.filter(n => n % 2 !== 0).length;

console.log({ парні, непарні });
// { парні: 5, непарні: 5 }