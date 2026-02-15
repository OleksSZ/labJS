String.prototype.reverse = function () {
    return this.split('').reverse().join('');
};


console.log("привіт".reverse());
console.log("JavaScript".reverse());
console.log("12345".reverse());
console.log("study".reverse());
console.log("  пробіл  ".reverse()); 