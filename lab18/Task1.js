let numbers = [7, -3, 0, 12, -5, 8, -1, 4];

let positive = numbers.filter(function(num) {
    return num > 0;
});

console.log(positive);  
// [7, 12, 8, 4]